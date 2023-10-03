// home routes

const { Layout } = require("../templates.js");

function get(req, res) {
  const title = "Play Dates";
  const content = /*html*/ `
    <h1>Time to play with your dates</h1>
  `;
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
