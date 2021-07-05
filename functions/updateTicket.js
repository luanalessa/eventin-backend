const { db, updateFromTicketsDatabase } = require("../database");

function updateTicket(req, res) {
  const token = req.body.token;

  updateFromTicketsDatabase(token, (token) => {
    res.send({ token });
  });
}

module.exports = updateTicket;
