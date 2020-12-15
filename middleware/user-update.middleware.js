const { ErrorHandler } = require('../error');
const { errorCodes: { BAD_REQUEST } } = require('../config');
const { updateUserValidator } = require('../validators');

module.exports = (req, res, next) => {
    try {
        const { error } = updateUserValidator.updateUserValidator.validate(req.body);

        if (error) {
            throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
        }

        next();
    } catch (e) {
        next(e);
    }
};
