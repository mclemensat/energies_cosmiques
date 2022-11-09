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

const findByUser = (username) => {
  return db
    .query("SELECT * FROM users WHERE username = ?", [username])
    .then(([results]) => results[0]);
};

module.exports = {
  validate,
  hashPassword,
  verifyPassword,
  findByUser,
};
