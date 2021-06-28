const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const { startDatabase, db } = require("./database");
const readUser = require("./functions/readUser.js");
const createUser = require("./functions/createUser.js");

startDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/users", readUser);
app.post("/users", createUser);

app.listen(3333);
