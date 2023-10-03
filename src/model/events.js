const db = require('../database/db.js');

const select_events = db.prepare(/*sql*/ `
SELECT content, event_date FROM events WHERE user_id = ?
ORDER BY event_date
`);

function listEvents(user_id) {
  return select_events.all(user_id);
}

module.exports = { listEvents };
