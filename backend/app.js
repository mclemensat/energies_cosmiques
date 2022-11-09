const router = require("./src/router");
const express = require("express");
const session = require('express-session');
const cors = require("cors");

const app = express();

const port = process.env.APP_PORT || 5000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
