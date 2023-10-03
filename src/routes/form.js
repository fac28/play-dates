const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { listEvents, createEvent } = require('../model/events.js');
const { getSession } = require('../model/sessions.js');
const { inputForm, layout } = require('../templates/form.js');

router.get('/', (req, res) => {
  const events = listEvents(req.params.user_id);
  const body = layout({ title: 'add an event', content: inputForm(events) });
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
