const test = require('node:test');
const assert = require('node:assert');
const model = require('../src/model/events.js');
const helpers = require('./helpers.js');
// const db = require('../src/database/db.js');

test('listEvents list all events linked to a user id', () => {
  helpers.resetdb();
  const actual = model.listEvents(1);
  const expected = [
    {
      content: 'Some sort of activity',
      day: '08',
      event_date: '2023-10-08 00:00:00',
      month: '10',
      year: '2023',
    },
    {
      content: 'Picnic in the park',
      day: '14',
      event_date: '2023-10-14 00:00:00',
      month: '10',
      year: '2023',
    },
    {
      content: 'Win the lottery',
      day: '27',
      event_date: '2023-10-27 00:00:00',
      month: '10',
      year: '2023',
    },
    {
      content: 'Something nice',
      day: '30',
      event_date: '2023-10-30 00:00:00',
      month: '10',
      year: '2023',
    },
  ];
  assert.deepEqual(expected, actual);
});

test('createEvent creates new event when given content, event_date & user_id', () => {
  helpers.resetdb();

  const expected = helpers.countNumber() + 1;

  model.createEvent('Test event', '2023-10-30 00:00:00', 1);

  const actual = helpers.countNumber();

  assert.equal(expected, actual);
});

// not currently working
// test('deleteEvent deletes event when given event id', () => {
//   helpers.resetdb();

//   const expected = helpers.countNumber() - 1;

//   model.deleteEvent(1);

//   const actual = helpers.countNumber();

//   assert.equal(expected, actual);
// });
