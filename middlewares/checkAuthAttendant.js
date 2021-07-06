function checkAuthAttendant(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(400);
    res.send({ message: "Invalid session" });
  } else {
    //decripta o token, faz split e pega o tipo de ususario
    const type = token.split(".")[1];
    if (type === "attendant") {
      next();
    } else {
      res.status(400);
      res.send({ message: "User not authorized" });
    }
  }
}

module.exports = checkAuthAttendant;
