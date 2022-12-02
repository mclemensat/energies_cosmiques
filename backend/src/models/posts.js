const connection = require("../../db-config");

const db = connection.promise();

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    title: Joi.string().max(100).presence(presence),
    theme: Joi.string().max(100).presence(presence),
    body: Joi.text().max(500).presence(presence),
    imgUrl: Joi.string().max(500).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const getPosts = () => {
  return db.query("SELECT * FROM posts").then(([results]) => results);
};

const findById = (id) => {
  return db
    .query("SELECT * FROM posts WHERE id = ?", [id])
    .then(([results]) => results[0]);
};

const addPost = ({ theme, title, body }) => {
  return db
    .query("INSERT INTO posts (theme, title, body) VALUES (?, ?, ?)", [
      theme,
      title,
      body,
    ])
    .then(([result]) => {
      const id = result.insertId;
      return { id, theme, title, body };
    });
};

const deletePost = (id) => {
  return db
    .query('DELETE FROM posts WHERE id = ?', [id])
    .then(([result]) => result.affectedRows !== 0);
};

module.exports = {
  validate,
  getPosts,
  findById,
  addPost,
  deletePost,
};
