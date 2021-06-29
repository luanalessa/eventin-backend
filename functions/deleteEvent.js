const { db, deleteFromEventsDatabase } = require("../database");

function deleteEvent(req, res) {
  const id = req.body.eventId;

  deleteFromEventsDatabase(id, (removeId) => {
    res.send({ id });
  });
}

module.exports = deleteEvent;
