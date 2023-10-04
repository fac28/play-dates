/* eslint-disable consistent-return */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../model/users.js');
const { createSession } = require('../model/sessions.js');
const logInTemplate = require('../templates/log-in-template.js');

router.get('/', (req, res) => {
  const content = logInTemplate();
  res.send(content);
});

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!email || !password || !user) {
    return res.status(400).send('<h1>Login failed</h1>');
  }
  bcrypt.compare(password, user.hash).then((match) => {
    if (match === undefined) {
      return res.status(400).send('<h1>Login failed</h1>');
    } else {
      const session_id = createSession(user.id);
      res.cookie('sid', session_id, {
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax',
        httpOnly: true,
      });
      res.redirect(`/`);
    }
  });
});

module.exports = router;
