const fs = require("fs");
const { db } = require("../database");

function delEvent(req, res) {
  const { username, eventId } = req.params;
  const users = db.users.map(({ ...user }) => user);

  console.log(username, eventId);
  const indexUser = users.findIndex((user) => username === user.username);

  const copyEvents = users[indexUser].events;
  copyEvents.splice(copyEvents.indexOf(eventId), 1);
  users[indexUser].events = copyEvents;

  fs.writeFileSync(
    "./database/users.json",
    JSON.stringify(users, null, 2),
    function (err, result) {
      console.log(result);
    }
  );
}

module.exports = delEvent;
