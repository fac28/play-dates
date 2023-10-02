//Server
const express = require("express");
const home = require("./routes/home.js");

const server = express();

server.get("/", home.get);

module.exports = server;
