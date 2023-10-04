const bcrypt = require('bcryptjs');
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const { createUser } = require('../model/users.js');
const { createSession } = require('../model/sessions.js');

router.get('/', (req, res) => {
  const title = 'Sign Up';
  // TO-DO: refactor this part later
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
        <button class="Button">Sign up</button>
      </form>
    </div>
  `;
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
