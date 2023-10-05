const { seeddb } = require('../src/database/seed.js');
const db = require('../src/database/db.js');

function cleardb() {
  db.exec(/*sql*/ `
        DELETE FROM partners;
        DELETE FROM events;
        DELETE FROM sessions;
        DELETE FROM users;
        DELETE FROM sqlite_sequence;
    `);
}

function resetdb() {
  cleardb();
  seeddb();
}

function countNumber() {
  return db
    .prepare(
      /*sql*/ `
    SELECT count(id) as num
    FROM events
  `
    )
    .get().num;
}

module.exports = { resetdb, countNumber };
