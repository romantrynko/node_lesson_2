const Joi = require('joi');

const { EMAIL, PASSWORD } = require('../../config/regex.enum');

module.exports = Joi.object({
    email: Joi
        .string()
        .regex(EMAIL),
    password: Joi
        .string()
        .regex(PASSWORD)
});
