const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const { startDatabase, db } = require("./database");
const checkAuthentication = require("./middlewares/checkAuthentication");
const readUser = require("./functions/readUser.js");
const createUser = require("./functions/createUser.js");
const createAttendant = require("./functions/createAttendant.js");
const login = require("./functions/login.js");
const logout = require("./functions/logout.js");
const readEvents = require("./functions/readEvents")
const submitEvent = require("./functions/submitEvent")


startDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/users", checkAuthentication, readUser);
app.post("/users", createUser);
app.post("/attendants", createAttendant);
app.post("/login", login);
app.post("/logout", logout);

app.get("/events", readEvents);
app.put(`/submit/:username&:eventId`, submitEvent);

app.listen(3333);
