//Server
const express = require('express');
const staticHandler = express.static('public');
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(staticHandler);

//Routes

module.exports = app;
