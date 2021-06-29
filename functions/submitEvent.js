const fs = require("fs");
const { db } = require("../database");

function submitEvent(req, res) {
  const { username, eventId } = req.params;
  const users = db.users.map(({ ...user }) => user);

  const indexUser = users.findIndex(user => username === user.username)
  console.log(eventId)
  if(users[indexUser].events == undefined) {
    users[indexUser].events = [eventId]
  }else{
    const copyEvents = users[indexUser].events
    copyEvents.push(eventId)
		users[indexUser].events = copyEvents
  }
  fs.writeFileSync("./database/users.json", JSON.stringify(users, null, 2), function (err, result) {
    console.log(result)
  });
  
}

module.exports = submitEvent;
