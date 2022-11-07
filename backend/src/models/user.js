const connection = require("../../db-config");
const Joi = require("joi");
const argon2 = require("argon2");

const db = connection.promise();

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    username: Joi.string().min(5).max(50).presence(presence),
    password: Joi.string().min(5).max(50).presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const login = (username) => {
  return db
  .query("SELECT * FROM users WHERE username = ?", [username])
  .then(([results]) => results[0]);
}

const findMany = () => {
  let sql = "SELECT id, username FROM users";
  const sqlValues = [];

  return db.query(sql, sqlValues).then(([results]) => results);
};

const findOne = (id) => {
  return db
    .query("SELECT id, username FROM users WHERE id = ?", [id])
    .then(([results]) => results[0]);
};

const create = ({ username, password }) => {
  return hashPassword(password).then((hashedPassword) => {
    return db
      .query("INSERT INTO users SET ?", {
        username,
        hashedPassword,
      })
      .then(([result]) => {
        const id = result.insertId;
        return { username, id };
      });
  });
};

const update = (id, newAttributes) => {
  return db.query("UPDATE users SET ? WHERE id = ?", [newAttributes, id]);
};

const destroy = (id) => {
  return db
    .query("DELETE FROM users WHERE id = ?", [id])
    .then(([result]) => result.affectedRows !== 0);
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

module.exports = {
  login,
  findMany,
  findOne,
  validate,
  create,
  update,
  destroy,
  hashPassword,
  verifyPassword,
};
