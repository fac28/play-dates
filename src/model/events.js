const db = require('../database/db.js');

const select_events = db.prepare(/*sql*/ `
SELECT content, event_date FROM events WHERE user_id = ?
ORDER BY event_date
`);

function listEvents(user_id) {
  return select_events.all(user_id);
}

const insert_event = db.prepare(/*sql*/ `
  INSERT INTO events (content, event_date, user_id)
  VALUES ($content, $event_date, $user_id)
  RETURNING id, content, event_date, created_at
`);

function createEvent(content, event_date, user_id) {
  return insert_event.get({ content, event_date, user_id });
}

const remove_event = db.prepare(/*sql*/ `
  DELETE FROM events WHERE id = ?
`);

function deleteEvent(id) {
  return remove_event.run(id);
}

module.exports = { listEvents, createEvent, deleteEvent };
