const fs = require("fs");

const db = {};

const files = [
  { filename: "./database/events.json", key: "events" },
  { filename: "./database/users.json", key: "users" },
  { filename: "./database/tickets.json", key: "tickets" },
];

function startDatabase() {
  for (let i = 0; i < files.length; i += 1) {
    const { filename, key } = files[i];

    readFile(filename, (data) => {
      db[key] = data;
    });
  }
}

function readFile(filename, onSuccess) {
  fs.readFile(filename, function (err, result) {
    const data = JSON.parse(result.toString());
    onSuccess(data);
  });
}

function updateEventsDatabase(data, onSuccess) {
  updateDatabase("events", data, onSuccess);
}

function updateTicketsDatabase(data, onSuccess) {
  updateDatabase("tickets", data, onSuccess);
}

function deleteFromEventsDatabase(id, onSuccess) {
  deleteFromDatabase("events", id, onSuccess);
}

function deleteFromUsersDatabase(id, onSuccess) {
  deleteFromDatabase("users", id, onSuccess);
}

function updateUsersDatabase(data, onSuccess) {
  updateDatabase("users", data, onSuccess);
}

function updateDatabase(key, data, onSuccess) {
  const { filename } = files.find((file) => file.key === key);
  const id = db[key].length + 1;
  const newData = { id, ...data };

  db[key].push(newData);

  writeData(filename, db[key], newData, onSuccess);
}

function deleteFromDatabase(key, id, onSuccess) {
  const { filename } = files.find((file) => file.key === key);
  const idList = db[key].map((item) => item.id);
  const index = idList.indexOf(id);

  if (index >= 0) {
    db[key].splice(index, 1);
  }

  writeData(filename, db[key], id, onSuccess);
}

function writeData(filename, data, newData, onSuccess) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err, result) {
    onSuccess(newData);
  });
}

module.exports = {
  db,
  startDatabase,
  deleteFromEventsDatabase,
  deleteFromUsersDatabase,
  updateEventsDatabase,
  updateUsersDatabase,
  updateTicketsDatabase,
};
