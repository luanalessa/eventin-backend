function logout(req, res) {
  res.clearCookie("token");
  res.send("success");
}

module.exports = logout;
