const { userService } = require('../../services');
const { ErrorHandler, errors } = require('../../error');

module.exports = {
    checkIsUserRegisteredByEmail: async (req, res, next) => {
        try {
            const { email } = req.body;
            const [user] = await userService.selectAllUsers({ email }, 1);

            if (user) {
                throw new ErrorHandler(errors.USER_EXISTS.message, errors.USER_EXISTS.code);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserRegisteredById: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = await userService.selectUserById(userId);

            if (!user) {
                throw new ErrorHandler(errors.USER_DOESNT_EXIST.message, errors.USER_DOESNT_EXIST.code);
            }
            req.user = user;

            next();
        } catch (e) {
            next(e);
        }
    }
};
