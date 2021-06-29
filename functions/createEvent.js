const { db, updateEventsDatabase } = require("../database");

function createEvent(req, res) {
  const { adminId, eventName, location, date, time, description, image } =
    req.body;
  const event = {
    adminId,
    eventName,
    location,
    date,
    time,
    description,
    image,
  };

  updateEventsDatabase(event, ({ ...newEvent }) => {
    res.send(newEvent);
  });
}

module.exports = createEvent;
