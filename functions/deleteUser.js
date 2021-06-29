const { db, deleteFromUsersDatabase } = require("../database");

function deleteUser(req, res) {
  const id = req.body.userId;

  deleteFromUsersDatabase(id, (removeId) => {
    res.send({ id });
  });
}

module.exports = deleteUser;
