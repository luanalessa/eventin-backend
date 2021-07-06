const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const { startDatabase, db } = require("./database");
const checkAuthentication = require("./middlewares/checkAuthentication");
const checkAuthAdmin = require("./middlewares/checkAuthAdmin");
const checkAuthAdminUser = require("./middlewares/checkAuthAdminUser");
const checkAuthUser = require("./middlewares/checkAuthUser");
const checkAuthAttendant = require("./middlewares/checkAuthAttendant");
const readUser = require("./functions/readUser.js");
const createUser = require("./functions/createUser.js");
const createAttendant = require("./functions/createAttendant.js");
const createEvent = require("./functions/createEvent.js");
const login = require("./functions/login.js");
const logout = require("./functions/logout.js");
const readEvents = require("./functions/readEvents.js");
const readUserEvents = require("./functions/readUserEvents.js");
const deleteEvent = require("./functions/deleteEvent.js");
const deleteUser = require("./functions/deleteUser.js");
const submitEvent = require("./functions/submitEvent");
const createTicket = require("./functions/createTicket");
const readTickets = require("./functions/readTickets.js");
const readTicket = require("./functions/readTicket.js");
const delEvent = require("./functions/delEvent");
const updateTicket = require("./functions/updateTicket.js");

startDatabase();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://192.168.15.11:3000", "http://localhost:3000"],
  })
);

app.get("/users", checkAuthAdminUser, readUser); //user e admin
app.post("/users", checkAuthAdmin, createUser); //admin
app.delete("/users", checkAuthAdmin, deleteUser); //admin
app.post("/attendants", createAttendant); //admin
app.post("/login", login);
app.post("/logout", logout);
app.post("/events", checkAuthAdmin, createEvent); //admin
app.get("/events", checkAuthAdminUser, readEvents); //user e admin
app.get(`/events/:id&:eventsId`, checkAuthAdminUser, readUserEvents); //user e admin
app.delete("/events", checkAuthAdmin, deleteEvent); //admin
app.put(`/submit/:username&:eventId`, checkAuthUser, submitEvent); //user
app.post("/tickets", checkAuthUser, createTicket); //user
app.get("/tickets", checkAuthUser, readTickets); //user
app.get("/ticket", checkAuthAttendant, readTicket); //attendant
app.put(`/del/:username&:eventId`, checkAuthUser, delEvent); //user
app.put("/ticket", checkAuthAttendant, updateTicket); //attendant

app.listen(3333);
