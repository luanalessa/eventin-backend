const { db } = require("../database");

function readTicket(req, res) {
  const { token } = req.query;
  const ticket = db.tickets.find((ticket) => ticket.token === token);

  if (ticket) {
    const { password, ...user } = db.users.find(
      (user) => user.id === ticket.userId
    );
    const event = db.events.find((event) => event.id === ticket.eventId);

    res.send({ ticket, user, event });
  } else {
    res.status(400);
    res.send({ message: "Invalid token " });
  }
}

module.exports = readTicket;
