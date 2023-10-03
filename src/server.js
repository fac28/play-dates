//Server
const express = require("express");
const staticHandler = express.static('public');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require("./routes/home.js");
const signup = require('./routes/sign-up.js');
const calendar = require('./routes/calendar.js');
const body = express.urlencoded({ extended: false });
const cookies = cookieParser(process.env.COOKIE_SECRET);

const app = express();
const homeRoutes = require('./routes/home');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(staticHandler);

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString('en-GB');
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});
app.use(cookies);

//Routes (need refactor)
app.use('/', homeRoutes);
app.get('/signup', signup.get);
app.post('/signup', body, signup.post);
app.get('/calendar/:user_id', calendar.get);
// server.post('/calendar', calendar.post);

module.exports = app;
