const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const events = require('../model/events');
//Variables
const layout = require('../templates/layout-main');
const session = require('../model/sessions');

router.get('/', (req, res) => {
  try {
    const year = 2023;
    const month = 9;
    const sid = req.signedCookies.sid;
    const active_session = session.getSession(sid);

    // remove for production: set user_id to be 1 if active_session is undefined
    const user_id = active_session ? active_session.user_id : 1;
    const all_events = events.listEvents(user_id);

    res.send(layout(year, month, all_events));
  } catch (error) {
    console.error('Error with route:', error.message);
    throw error;
  }
});

module.exports = router;
