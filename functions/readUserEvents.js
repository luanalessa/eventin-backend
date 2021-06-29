const { db } = require("../database");

function readUserEvents(req, res) {
  const { id } = req.params;

  const tickets = db.tickets.filter((ticket) => ticket.userId === Number(id));
  const eventIds = tickets.map((ticket) => ticket.eventId);
  const events = db.events.filter((event) => eventIds.includes(event.id));

  res.send(events);
}

module.exports = readUserEvents;
