const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const events = require('../model/events');
//Variables
const layout = require('../templates/layout-main');
const session = require('../model/sessions');

// eslint-disable-next-line consistent-return
router.get('/', (req, res) => {
  try {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const sid = req.signedCookies.sid;
    const active_session = session.getSession(sid);

    if (!active_session) {
      return res.redirect('/login');
    }

    // remove for production: set user_id to be 1 if active_session is undefined
    const user_id = active_session ? active_session.user_id : 1;
    const all_events = events.listEventsByMonth(user_id, currentMonth);
    console.log(all_events);
    res.send(layout(currentYear, currentMonth, all_events));
  } catch (error) {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
