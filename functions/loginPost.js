function loginPost (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // let user = Object.keys(users).filter(
  //     (elem) => users[elem].username === username
  // );

  if (loginUsers[username]) {
      console.log("entrou");
      if (password == loginUsers[username]) {
          const token = `${new Date().getTime()}:${username}`;
          res.send("Login Sucessful");
          res.cookie('token', token, { maxAge: 900000, httpOnly: true })
          cookies[`${username}`] = token;
      } else {
          res.send("User or password incorrect");
      }
  } else {
      res.send("User not found");
  }
};