const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../../config/regex.enum');

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(20),
    email: Joi
        .string()
        .regex(EMAIL),
    password: Joi
        .string()
        .regex(PASSWORD)
});
