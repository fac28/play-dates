/* eslint-disable consistent-return */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { deleteEvent } = require('../model/events');
const { getSession } = require('../model/sessions');

router.post('/:id', (req, res) => {
  const id = req.params.id;
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  const user_id = session.user_id;

  deleteEvent(user_id, id);

  res.redirect('../');
});

module.exports = router;
