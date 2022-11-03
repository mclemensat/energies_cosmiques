const router = require("./src/router");
const express = require('express');
const cookieParser = require('cookie-parser')

const app = express();

const port = process.env.APP_PORT || 5000;

app.use(express.json());
app.use(cookieParser())


app.use(router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
