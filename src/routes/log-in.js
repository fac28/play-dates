/* eslint-disable consistent-return */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const bcrypt = require('bcryptjs');
const { getUserByEmail } = require('../model/users.js');
const { createSession } = require('../model/sessions.js');
const layout = require('../templates/template.js');

router.get('/', (req, res) => {
  const title = 'Log in to your account';
  const content = /*html*/ `
    <div class="Cover">
      <h1>${title}</h1>
      <form method="POST" class="Row">
        <div class="Stack" style="--gap: 0.25rem">
          <label for="email">email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="Stack" style="--gap: 0.25rem">
          <label for="password">password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button class="Button">Log in</button>
      </form>
    </div>
  `;
  const body = layout({ title, content });
  res.send(body);
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
