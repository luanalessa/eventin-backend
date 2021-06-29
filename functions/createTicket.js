const { db, updateTicketsDatabase } = require("../database");

function createTicket(req, res) {
  const { token, userId, eventId, validated } = req.body;
  const ticket = {
    token,
    userId,
    eventId,
    validated,
  };

  updateTicketsDatabase(ticket, ({ ...newTicket }) => {
    res.send(newTicket);
  });
}

module.exports = createTicket;
