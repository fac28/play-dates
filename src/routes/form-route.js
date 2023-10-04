const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const { listEvents, createEvent } = require('../model/events.js');
const { getSession } = require('../model/sessions.js');
const { inputForm } = require('../templates/form-template.js');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const year = currentYear;
const currentMonth = currentDate.getMonth();
const month = currentMonth;

router.get('/', (req, res) => {
  const events = listEvents(req.params.user_id);
  const body = inputForm(year, month, events);
  res.send(body);
});

router.post('/', (req, res) => {
  const { content, event_date } = req.body;
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  const user_id = session.user_id;
  createEvent(content, event_date, user_id);
  res.redirect('/');
});

module.exports = router;
