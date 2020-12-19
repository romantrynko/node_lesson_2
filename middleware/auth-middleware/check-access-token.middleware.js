const jwt = require('jsonwebtoken');
const { ErrorHandler, errors } = require('../../error');
const { o_authService } = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        jwt.verify(token, 'MEGA_KEY', (err) => {
            if (err) {
                throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
            }
        });

        const userWithToken = await o_authService.getUserTokenByParams({ token });

        if (!userWithToken) {
            throw new ErrorHandler(errors.NOT_VALID_TOKEN.message, errors.NOT_VALID_TOKEN.code);
        }

        req.user = userWithToken;

        next();
    } catch (e) {
        next(e);
    }
};
