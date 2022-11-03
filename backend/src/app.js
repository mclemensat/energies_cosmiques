const path = require("path");
const express = require('express')
const cors = require("cors");
const session = require("express-session");

const app = express()

app.use(
  session({
    name: "energies_cosmiques",
    secret: "energies_cosmiques",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

const router = require("./router");

app.use(router);

module.exports = app;
