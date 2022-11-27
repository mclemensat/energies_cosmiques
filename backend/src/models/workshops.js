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

const getWorkshops = () => {
  return db.query("SELECT * FROM workshops").then(([results]) => results);
};

const findById = (id) => {
  return db
    .query("SELECT * FROM workshops WHERE id = ?", [id])
    .then(([results]) => results[0]);
};

module.exports = {
  validate,
  getWorkshops,
  findById,
};
