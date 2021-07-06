function checkAuthentication(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(400);
    res.send({ message: "User not authorized" });
  } else {
    //decripta o token, faz split e pega o tipo de ususario
    next();
  }
}

module.exports = checkAuthentication;
