const router = require("express").Router();
const connection = require("../db-config");
const { connect } = require("../db-config");
const User = require("./models/user");
const Posts = require("./models/posts");
const Workshops = require("./models/workshops");

router.get("/me", (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.sendStatus(401);
  }

  res.send(user);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findByUser(username, password).then((user) => {
    if (!user) res.status(401).send("No user");
    else {
      req.session.user = user;

      res.send(user);
    }
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).send("Logged out")
});

router.get("/posts", (req, res) => {
  const { posts } = req.body;
  Posts.getPosts(posts).then((post) => {
    if (!post) res.status(401).send("No post");
    else {
      res.send(post);
    }
  });
});

router.get("/posts/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).send("Post not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Error retrieving post from database");
    });
});

router.post("/posts", (req, res) => {
  Posts.addPost({ ...req.body })
    .then((createdPost) => {
      res.status(201).json(createdPost);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error adding the post");
    });
});

router.delete("/posts/:id", (req, res) => {
  Posts.deletePost(req.params.id)
    .then((deleted) => {
      if (deleted) res.status(200).send("Post deleted!");
      else res.status(404).send("Post not found");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error deleting a post");
    });
});

router.get("/workshops", (req, res) => {
  const { workshops } = req.body;
  Workshops.getWorkshops(workshops).then((workshop) => {
    if (!workshop) res.status(401).send("No workshop");
    else {
      res.send(workshop);
    }
  });
});

router.get("/workshops/:id", (req, res) => {
  Workshops.findById(req.params.id)
    .then((workshop) => {
      if (workshop) {
        res.json(workshop);
      } else {
        res.status(404).send("Workshop not found");
      }
    })
    .catch((err) => {
      res.status(500).send("Error retrieving workshop from database");
    });
});

module.exports = router;
