const { passHelper: { compare } } = require('../../utils');
const { userService: { selectUserByParams } } = require('../../services');
const { ErrorHandler, errors } = require('../../error');

module.exports = async (res, req, next) => {
    try {
        const { password, email } = req.body;
        const [user] = await selectUserByParams({ email });

        if (!user) {
            throw new ErrorHandler(errors.NOT_VALID_EMAIL_OR_PASSWORD.message, errors.NOT_VALID_EMAIL_OR_PASSWORD.code);
        }

        await compare(password, user.password);

        req.user = user;

        next();
    } catch (e) {
        next(e);
    }
};
