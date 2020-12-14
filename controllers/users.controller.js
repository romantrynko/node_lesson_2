const { userService } = require('../services');
const { errors } = require('../error');

module.exports = {

    createUser: async (req, res, next) => {
        try {
            await userService.insertUser(req.body);

            res.sendStatus(errors.USER_CREATED.code);
        } catch (e) {
            next(e);
        }
    },

    updateUser: (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = req.body;

            userService.updateUser(userId, user)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(errors.USER_CREATED.code).json(users);
                });
        } catch (e) {
            next(e);
        }
    },

    findAllUsers: async (req, res, next) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            const users = await userService.selectAllUsers(where, +limit, +offset) || [];

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    findUserById: (req, res, next) => {
        try {
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

    getFilteredUsers: (req, res, next) => {
        try {
            const { name } = req.params;

            userService.getFilteredUsers(name)
                .then((users) => {
                    res.status(errors.OK.code).json(users);
                });
        } catch (e) {
            next(e);
        }
    },

    deleteUser: (req, res, next) => {
        try {
            const { userId } = req.params;

            userService.deleteUser(userId)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(errors.OK.code).json(users);
                });
        } catch (e) {
            next(e);
        }
    }
};
