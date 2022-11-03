const path = require("path");
const express = require('express')
const cors = require("cors");
const session = require("express-session");

const app = require("./src/app");
const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})