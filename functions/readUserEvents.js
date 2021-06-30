const { db } = require("../database");

function readUserEvents(req, res) {
  const { id, eventsId } = req.params;
  console.log("aaaaaaaaaaaa", id, eventsId);

  const tickets = db.tickets.filter((ticket) => ticket.userId === Number(id));
  const eventIds = tickets.map((ticket) => ticket.eventId);
  const events = db.events.filter((event) => {
    const teste = eventsId.includes(event.id)
    if (teste) {
      return event;
    } else {
      return null;
    }
  });

  console.log(events);
  res.send(events);
}

module.exports = readUserEvents;
