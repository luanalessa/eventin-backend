function checkAuthentication(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(400);
    res.send({ message: "User not authorized" });
  } else {
    // const username = token.split(":")[1];

    next();
  }
}

module.exports = checkAuthentication;
