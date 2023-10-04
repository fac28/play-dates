const test = require('node:test');
const assert = require('node:assert');
const model = require('../src/model/users.js');
const helpers = require('./helpers.js');

test('can get user information from email', () => {
  helpers.resetdb();
  const actual = model.getUserByEmail('a@example.com');
  const expected = {
    id: 1,
    email: 'a@example.com',
    hash: '$2a$12$A74tKw96m82AEZpJrIEQxecZGscKayJD/hD5/I6DuqKEJoQlAlNYO',
    created_at: '2023-10-10 00:00:00',
  };
  assert.deepEqual(expected, actual);
});

test('can create new user from email and hash', () => {
  helpers.resetdb();
  const expected = {
    id: 8,
    email: 'test@test.com',
    hash: 'hash',
  };
  model.createUser(expected.email, expected.hash);
  const actual = model.getUserByEmail('test@test.com');
  assert.deepEqual(
    [expected.id, expected.email, expected.hash],
    [actual.id, actual.email, actual.hash]
  );
});
