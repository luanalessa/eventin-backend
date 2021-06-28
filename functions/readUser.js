const { db } = require("../database");

function readUser(req, res) {
  const users = db.users.map(({ password, ...user }) => user);

  res.send(users);
}

module.exports = readUser;
