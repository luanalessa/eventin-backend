const bcrypt = require("bcrypt");
const { db } = require("../database");

function login(req, res) {
  const { username, password } = req.body;

  const { password: userPassword, ...user } = db.users.find(
    (u) => u.username === username
  );

  if (user) {
    bcrypt.compare(password, userPassword, (err, result) => {
      if (result) {
        const token = `${new Date().getTime()}:${username}`;

        res.cookie("token", token);
        res.send({ token, ...user });
      } else {
        res.status(400);
        res.send({ message: "Password incorrect" });
      }
    });
  } else {
    res.status(400);
    res.send({ message: "User not found" });
  }
}

module.exports = login;
