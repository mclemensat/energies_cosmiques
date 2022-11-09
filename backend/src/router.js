const router = require("express").Router();
const connection = require("../db-config");
const { connect } = require("../db-config");
const User = require("./models/user");

// router.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   User.findByUser(username).then((user) => {
//     if (!user) res.status(401).send("No user");
//     else {
//       User.verifyPassword(password).then(
//         (passwordIsCorrect) => {
//           if (passwordIsCorrect) {
//             res.send(user);
//           } else res.status(401).send("Invalid credentials");
//         }
//       );
//     }
//   });
// });

router.post("/login", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  if (username && password) {
    connection.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.username = username;
        } else {
          res.send("Incorrect");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter username and password");
    res.end();
  }
});

module.exports = router;
