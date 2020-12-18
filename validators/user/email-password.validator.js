const Joi = require('joi');

const { regex: { EMAIL, PASSWORD } } = require('../../config');

module.exports = Joi.object({
    email: Joi
        .string()
        .regex(EMAIL),
    password: Joi
        .string()
        .regex(PASSWORD)
});
