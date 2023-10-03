//Server
const express = require('express');
const cookieParser = require('cookie-parser');

const home = require('./routes/home.js');
const signup = require('./routes/sign-up.js');
const calendar = require('./routes/calendar.js');

const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

const server = express();

server.use((req, res, next) => {
  const time = new Date().toLocaleTimeString('en-GB');
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});
server.use(cookies);

server.get('/', home.get);
server.get('/signup', signup.get);
server.post('/signup', body, signup.post);
server.get('/calendar/:user_id', calendar.get);
// server.post('/calendar', calendar.post);

module.exports = server;
