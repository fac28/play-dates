// Partner models
const db = require('../database/db.js');

const display_partners = db.prepare(/*sql*/ `
    SELECT partners_id AS user_id
    FROM partners
    WHERE user_id = $user_id
    UNION
    SELECT user_id
    FROM partners
    WHERE partners_id = $user_id
`);

function fetchPartners(user_id) {
  return display_partners.all({ user_id });
}

/*Horrifying sql statement joins partners table to events table where: partners.user_id = events.user_id and partners.partners_id = $user_id, OR partners.partners_id = events.user_id and partners.user_id = $user_id so should grab all events that belong to partners of user without grabbing users events*/
const list_partners_events = db.prepare(/*sql*/ `
    SELECT DISTINCT
        e.id AS id,
        e.user_id AS user_id,
        e.content AS content,
        e.event_date,
        strftime('%d', e.event_date) AS day,
        strftime('%m', e.event_date) AS month,
        strftime('%Y', e.event_date) AS year,
        u.email,
        e.user_id AS user_id
    FROM partners AS p
    JOIN events AS e ON (p.user_id = e.user_id AND p.partners_id = $user_id AND strftime('%m', event_date) = $month)
                      OR (p.partners_id = e.user_id AND p.user_id = $user_id AND strftime('%m', event_date) = $month)
    JOIN users AS u ON e.user_id = u.id
    ORDER BY event_date
`);

function listPartnersEvents(user_id, month) {
  const formattedMonth = (month + 1).toString().padStart(2, '0');
  return list_partners_events.all({ user_id, month: formattedMonth });
}

module.exports = { listPartnersEvents, fetchPartners };
