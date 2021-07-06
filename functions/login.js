const bcrypt = require("bcrypt");
const { db } = require("../database");
const crypto = require("crypto");

function login(req, res) {
  const { username, password } = req.body;

  const { password: userPassword, ...user } = db.users.find(
    (u) => u.username === username
  );

  const cookieOptions = {
    maxAge: 900000,
    sameSite: "strict",
  };

  if (user) {
    bcrypt.compare(password, userPassword, (err, result) => {
      if (result) {
        const token = `${new Date().getTime()}.${user.type}`;
        // const token = crypto.createHash("sha256").update(tokenId).digest("hex");

        res.cookie("token", token, cookieOptions);
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
