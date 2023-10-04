const db = require('../database/db.js');

const select_events = db.prepare(/*sql*/ `
SELECT 
  content, 
  event_date,
  strftime('%d', event_date) AS day,
  strftime('%m', event_date) AS month,
  strftime('%Y', event_date) AS year
FROM events
WHERE user_id = ?
ORDER BY event_date
`);

function listEvents(user_id) {
  return select_events.all(user_id);
}

const select_events_by_month = db.prepare(/*sql*/ `
  SELECT 
    id,
    content, 
    event_date,
    strftime('%d', event_date) AS day,
    strftime('%m', event_date) AS month,
    strftime('%Y', event_date) AS year
  FROM events
  WHERE user_id = $user_id AND strftime('%m', event_date) = $month
  ORDER BY event_date
`);

function listEventsByMonth(user_id, month) {
  const formattedMonth = (month + 1).toString().padStart(2, '0');
  return select_events_by_month.all({ user_id, month: formattedMonth });
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
  DELETE FROM events 
  WHERE id = $id
  And user_id = $user_id
`);

function deleteEvent(id, user_id) {
  return remove_event.run({ id, user_id });
}

module.exports = { listEvents, listEventsByMonth, createEvent, deleteEvent };
