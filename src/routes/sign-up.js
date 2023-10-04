const bcrypt = require('bcryptjs');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { createUser } = require('../model/users.js');
const { createSession } = require('../model/sessions.js');
const signUpTemplate = require('../templates/sign-up-template.js');

router.get('/', (req, res) => {
  const content = signUpTemplate();
  res.send(content);
});

router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    bcrypt.hash(password, 12).then((hash) => {
      const user = createUser(email, hash);
      const session_id = createSession(user.id);

      res.cookie('sid', session_id, {
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'lax',
        httpOnly: true,
      });
      res.redirect(`/calendar/${user.id}`);
    });
  }
});

module.exports = router;
