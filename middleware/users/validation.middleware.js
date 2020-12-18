const { ErrorHandler, errors } = require('../../error');

module.exports = {
    isIdCorrect: (req, res, next) => {
        try {
            const { userId } = req.params;

            if (!userId || userId < 0 || !Number.isInteger(+userId)) {
                throw new ErrorHandler(errors.NOT_VALID_ID.message, errors.NOT_VALID_ID.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserUpdateCorrect: (req, res, next) => {
        try {
            const {
                email, name, password, ...other
            } = req.body;

            if (email && email.length < 5) {
                throw new ErrorHandler(errors.NOT_VALID_EMAIL_OR_PASSWORD.message, errors.NOT_VALID_EMAIL.code);
            }

            if (name && name.length < 3) {
                throw new ErrorHandler(errors.NOT_VALID_NAME.message, errors.NOT_VALID_NAME.code);
            }

            if (password && password.length < 5) {
                throw new ErrorHandler(errors.NOT_VALID_EMAIL_OR_PASSWORD.message, errors.NOT_VALID_PASSWORD.code);
            }

            if (Object.values(other).length) {
                throw new ErrorHandler(errors.WRONG_FIELDS.message, errors.WRONG_FIELDS.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserCreateCorrect: (req, res, next) => {
        try {
            const {
                email, name, password, ...other
            } = req.body;

            if (!email || email.length < 5) {
                throw new ErrorHandler(errors.NOT_VALID_EMAIL_OR_PASSWORD.message, errors.NOT_VALID_EMAIL.code);
            }

            if (!name || name.length < 3) {
                throw new ErrorHandler(errors.NOT_VALID_NAME.message, errors.NOT_VALID_NAME.code);
            }

            if (!password || password.length < 5) {
                throw new ErrorHandler(errors.NOT_VALID_EMAIL_OR_PASSWORD.message, errors.NOT_VALID_PASSWORD.code);
            }

            if (Object.values(other).length) {
                throw new ErrorHandler(errors.WRONG_FIELDS.message, errors.WRONG_FIELDS.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
