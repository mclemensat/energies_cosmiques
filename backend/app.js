const router = require("./src/router");
const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();

const port = process.env.APP_PORT || 5000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(
  session({
    name: "energies_cosmiques",
    secret: "supersecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
