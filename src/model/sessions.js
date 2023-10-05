const crypto = require('node:crypto');
const db = require('../database/db.js');

const insert_session = db.prepare(/*sql*/ `
  INSERT INTO sessions (sid, user_id, expires_at)
  VALUES ($id, $user_id, DATE('now', '+7 days'))
`);

function createSession(user_id) {
  const id = crypto.randomBytes(18).toString('base64');
  insert_session.run({ id, user_id });
  return id;
}

const select_session = db.prepare(/*sql*/ `
  SELECT sid, user_id, expires_at
  FROM sessions WHERE sid = ?
`);

function getSession(sid) {
  return select_session.get(sid);
}

const delete_session = db.prepare(/*sql*/ `
  DELETE FROM sessions WHERE sid = ?
`);

function removeSession(sid) {
  return delete_session.run(sid);
}

module.exports = { createSession, getSession, removeSession };
