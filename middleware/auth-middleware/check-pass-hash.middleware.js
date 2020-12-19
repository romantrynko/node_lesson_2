const { passHelper: { compare } } = require('../../utils');
const { userService } = require('../../services');
const { ErrorHandler, errors: { NOT_VALID_EMAIL_OR_PASSWORD } } = require('../../error');

module.exports = async (res, req, next) => {
    try {
        const { password, email } = req.body;
        const [user] = await userService.selectUserByParams({ email });

        if (!user) {
            throw new ErrorHandler(NOT_VALID_EMAIL_OR_PASSWORD.code);
        }

        await compare(password, user.password);

        req.user = user;

        next();
    } catch (e) {
        next(e);
    }
};
