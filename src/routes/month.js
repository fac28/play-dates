const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const events = require('../model/events');
const partners = require('../model/partners');
//Variables
const layout = require('../templates/layout-main');
const session = require('../model/sessions');

router.get('/:month', (req, res) => {
  try {
    const sid = req.signedCookies.sid;
    const active_session = session.getSession(sid);
    if (!active_session) {
      return res.redirect('/login');
    }
    const currentDate = new Date();

    const year = parseInt(req.params.year, 10) || currentDate.getFullYear();
    const month = parseInt(req.params.month, 10) || currentDate.getMonth();

    // TODO: remove for production: set user_id to be 1 if active_session is undefined
    const user_id = active_session ? active_session.user_id : 1;

    const usersEvents = events.listEventsByMonth(user_id, month);
    const partnersEvents = partners.listPartnersEvents(user_id, month);
    const all_events = usersEvents.concat(partnersEvents);
    console.log(all_events);
    return res.send(layout(year, month, all_events));
  } catch (error) {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
