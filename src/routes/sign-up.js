/* eslint-disable consistent-return */
const bcrypt = require('bcryptjs');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { createUser, getUserByEmail } = require('../model/users.js');
const { createSession } = require('../model/sessions.js');
// const signUpTemplate = require('../templates/sign-up-template.js');
const authenticationTemplate = require('../templates/authentication-template.js');
const signUpTemplate = authenticationTemplate(
  'Sign up',
  'Sign up',
  'Already have an account?',
  '/login'
);

router.get('/', (req, res) => {
  const content = signUpTemplate;
  res.send(content);
});

router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const existingUser = getUserByEmail(email);

    if (existingUser) {
      // User already exists, redirect to login page
      return res.redirect('/login');
    }

    bcrypt.hash(password, 12).then((hash) => {
      const user = createUser(email, hash);
      const session_id = createSession(user.id);

      res.cookie('sid', session_id, {
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'lax',
        httpOnly: true,
      });
      res.redirect(`../`);
    });
  }
});

module.exports = router;
