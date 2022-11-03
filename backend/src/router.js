const path = require("path");
const express = require("express");

const {
  UserController,
} = require("./controllers/UserController");

const router = express.Router();

router.post("/login", UserController.login);
router.get("/me", UserController.me);

module.exports = router;
