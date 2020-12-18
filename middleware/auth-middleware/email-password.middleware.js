const { ErrorHandler } = require('../../error');
const { errorCodes: { BAD_REQUEST } } = require('../../config');
const { emailPasswordValidator } = require('../../validators/user');

module.exports = (req, res, next) => {
    try {
        const { error } = emailPasswordValidator.validate(req.body);

        if (error) {
            throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
        }

        next();
    } catch (e) {
        next(e);
    }
};
