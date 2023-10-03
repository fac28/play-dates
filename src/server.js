//Server
const express = require('express');
const staticHandler = express.static('public');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cookies = cookieParser(process.env.COOKIE_SECRET);

const app = express();
const homeRoutes = require('./routes/home');
const formRoutes = require('./routes/form');
const signupRoutes = require('./routes/sign-up');

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
app.use('/form', formRoutes);
app.use('/signup', signupRoutes);
// server.post('/calendar', calendar.post);

module.exports = app;
