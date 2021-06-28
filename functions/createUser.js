const { db, updateUsersDatabase } = require("../database");

function createUser(req, res) {
  const { fullname, username, password } = req.body;
  const user = { fullname, username, password };

  updateUsersDatabase(user, (newUser) => {
    res.send(newUser);
  });
}

module.exports = createUser;
