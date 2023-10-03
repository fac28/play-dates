//Server
const express = require('express');
const staticHandler = express.static('public');
const bodyParser = require('body-parser');

const app = express();
const homeRoutes = require('./routes/home');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(staticHandler);

//Routes
app.use('/', homeRoutes);
module.exports = app;
