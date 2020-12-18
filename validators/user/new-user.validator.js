const Joi = require('joi');

const { regex: { EMAIL, PASSWORD } } = require('../../config');
const { CURRENT_YEAR } = require('../../constants/constants');

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
        .required(),
    Cars: Joi.array().items(
        Joi.object({
            model: Joi
                .string()
                .alphanum()
                .min(2)
                .max(20),
            year: Joi
                .number()
                .integer()
                .min(CURRENT_YEAR - 120)
                .max(CURRENT_YEAR),
            price: Joi
                .number()
                .integer(),
            user_id: Joi
                .number()
                .integer()
        })
    )
});
