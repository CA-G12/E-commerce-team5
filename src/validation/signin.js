const Joi = require('joi');

const signInSchema = Joi.object({
  email: Joi.string().email().trim(true).required(),
  password: Joi.string().min(8).max(20).alphanum().required(),
});
const signInValidation = (dataObj) => signInSchema.validateAsync(dataObj);

module.exports = signInValidation;
