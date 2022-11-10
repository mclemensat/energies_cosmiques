const router = require("express").Router();
const connection = require("../db-config");
const { connect } = require("../db-config");
const User = require("./models/user");

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findByUser(username, password).then((user) => {
    if (!user) res.status(401).send("No user");
    else {
      res.send(user);
    }
  });
});

module.exports = router;
