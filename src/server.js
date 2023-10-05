//Server
const express = require('express');
const staticHandler = express.static('public');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const homeRoutes = require('./routes/home');
const formRoutes = require('./routes/form-route');
const signupRoutes = require('./routes/sign-up');
const monthRoutes = require('./routes/month');
const loginRoutes = require('./routes/log-in');
const logoutRoutes = require('./routes/logout');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(staticHandler);

app.use((req, res, next) => {
  const time = new Date().toLocaleTimeString('en-GB');
  console.log(`${time} ${req.method} ${req.url}`);
  next();
});

//Routes (need refactor)
app.use('/', homeRoutes);
app.use('/form', formRoutes);
app.use('/signup', signupRoutes);
app.use('/month', monthRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoutes);

module.exports = app;
