const { db } = require("../database");

function readTickets(req, res) {
  res.send(db.tickets);
}

module.exports = readTickets;
