const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const adminFile = "admins.json";
const eventsFile = "events.json";
const usersFile = "users.json";
const attendantsFile = "attendants.json";
const loginFile = "login.json";

let admin = [];
let events = [];
let users = [];
let attendants = [];
let loginUsers = {};

const loginPost = require(./functions/loginPost.js);

/* --------------------------------------------------------------------------
-------------- CRIA O ARQUIVO USERS.JSON OU FAZ A LEITURA DELE ---------------
---------------------------------------------------------------------------*/
fs.stat(usersFile, (exists) => {
  exists
    ? fs.writeFile(usersFile, "[]", (err) => {
        if (err) console.log(err);
        console.log("file create");
      })
    : fs.readFile(usersFile, function (err, data) {
        console.log("aqui");
        users = JSON.parse(data.toString()); // converting a buffer to object
        console.log(typeof users, users);
      });
});

/* --------------------------------------------------------------------------
-------------- CRIA O ARQUIVO EVENTS.JSON OU FAZ A LEITURA DELE ---------------
---------------------------------------------------------------------------*/
fs.stat(eventsFile, (exists) => {
  exists
    ? fs.writeFile(eventsFile, "[]", (err) => {
        if (err) console.log(err);
        console.log("file create");
      })
    : fs.readFile(eventsFile, function (err, data) {
        console.log("aqui");
        users = JSON.parse(data.toString()); // converting a buffer to object
        console.log(typeof events, events);
      });
});

/* --------------------------------------------------------------------------
-------------- CRIA O ARQUIVO ATTENDANTS.JSON OU FAZ A LEITURA DELE ---------------
---------------------------------------------------------------------------*/
fs.stat(attendantsFile, (exists) => {
  exists
    ? fs.writeFile(attendantsFile, "[]", (err) => {
        if (err) console.log(err);
        console.log("file create");
      })
    : fs.readFile(attendantsFile, function (err, data) {
        console.log("aqui");
        users = JSON.parse(data.toString()); // converting a buffer to object
        console.log(typeof events, events);
      });
});

/* --------------------------------------------------------------------------
------------- CRIA O ARQUIVO LOGINFILE.JSON OU FAZ A LEITURA DELE -----------
---------------------------------------------------------------------------*/
fs.stat(loginFile, (exists) => {
  exists
    ? fs.writeFile(loginFile, "[]", (err) => {
        if (err) console.log(err);
        console.log("file create");
      })
    : fs.readFile(loginFile, function (err, data) {
        console.log("aqui");
        loginUsers = JSON.parse(data.toString()); // converting a buffer to object
        console.log(typeof users, users);
      });
});

/* --------------------------------------------------------------------------
------------- CHAMA AS FUNÇÕES DE POST, GET, PUT, DELETE --------------------
---------------------------------------------------------------------------*/

app.post("/home/", loginPost);

app.listen(3333);
