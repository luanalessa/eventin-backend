const fs = require("fs");

const db = {};

const files = [
  { filename: "./database/admins.json", key: "admins" },
  { filename: "./database/attendants.json", key: "attendants" },
  { filename: "./database/events.json", key: "events" },
  { filename: "./database/users.json", key: "users" },
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

function updateAdminsDatabase(data, onSuccess) {
  updateDatabase("admins", data, onSuccess);
}

function updateAttendantsDatabase(data, onSuccess) {
  updateDatabase("attendants", data, onSuccess);
}

function updateEventsDatabase(data, onSuccess) {
  updateDatabase("events", data, onSuccess);
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

function writeData(filename, data, newData, onSuccess) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), function (err, result) {
    onSuccess(newData);
  });
}

module.exports = {
  db,
  startDatabase,
  updateAdminsDatabase,
  updateAttendantsDatabase,
  updateEventsDatabase,
  updateUsersDatabase,
};
