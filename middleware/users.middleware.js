const { userService } = require('../services');

module.exports = {

    checkIsUserRegisteredByEmail: async (req, res, next) => {
        try {
            const { email } = req.body;

            const [user] = await userService.selectAllUsers({ email }, 1);

            if (user) {
                throw new Error('User already exists');
            }

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkIsUserRegisteredById: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const user = await userService.selectUserById(userId);

            if (!user) {
                throw new Error('User is not present');
            }
            req.user = user;

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
