const test = require('node:test');
const assert = require('node:assert');
const session = require('../src/model/sessions.js');
const users = require('../src/model/users.js');
const helpers = require('./helpers.js');

test('User can sign up', async () => {
  const user = await users.createUser('hello@hey.com', 'password');

//   assert.equal(3, 3);
});

// test('User can login', async () => {
// })

// test('User can logout', async () => {
// })
