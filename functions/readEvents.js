const { db } = require("../database");

function readEvents(req, res) {
  res.send(db.events);
}

module.exports = readEvents;
