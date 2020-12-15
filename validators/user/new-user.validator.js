const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../../config/regex.enum');

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(20)
        .required(),
    email: Joi
        .string()
        .regex(EMAIL)
        .required(),
    password: Joi
        .string()
        .regex(PASSWORD)
        .required()
});
