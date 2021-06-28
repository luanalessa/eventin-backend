const { db } = require("../database");

function readUser(req, res) {
  res.send(db.users);
}

module.exports = readUser;
