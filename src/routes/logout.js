/* eslint-disable consistent-return */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { removeSession } = require('../model/sessions');

router.post('/', (req, res) => {
  const sid = req.signedCookies.sid;
  removeSession(sid);
  res.clearCookie('sid');
  res.redirect('./login');
});

module.exports = router;
