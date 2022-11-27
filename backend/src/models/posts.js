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

module.exports = {
  validate,
  getPosts,
  findById,
};
