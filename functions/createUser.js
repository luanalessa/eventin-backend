const bcrypt = require("bcrypt");
const { db, updateUsersDatabase } = require("../database");

const salt = bcrypt.genSaltSync(10);

function createUser(req, res) {
  const { fullname, username, password, type, adminId } = req.body;
  const cryptPassword = bcrypt.hashSync(password, salt);
  const user = { fullname, username, type, adminId, password: cryptPassword };

  updateUsersDatabase(user, ({ password, ...newUser }) => {
    res.send(newUser);
  });
}

module.exports = createUser;
