/* eslint-disable consistent-return */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { deleteEvent } = require('../model/events');
const { getSession } = require('../model/sessions');

router.post('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const sid = req.signedCookies.sid;
  const session = getSession(sid);
  const user_id = session.user_id;

  deleteEvent(id, user_id);

  res.redirect('../');
});

module.exports = router;
