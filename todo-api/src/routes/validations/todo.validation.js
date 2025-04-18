const Joi = require("joi");

// https://joi.dev/api/?v=17.13.3
const todoSchema = Joi.object({
  title: Joi.string().min(3).max(40).required(),
});

module.exports = todoSchema;
