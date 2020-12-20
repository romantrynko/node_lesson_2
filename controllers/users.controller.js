const { emailService, userService } = require('../services');
const { errors } = require('../error');
const { passHelper: { hash } } = require('../utils');
const { WELCOME } = require('../constants/email-actions.enum');

module.exports = {

    createUser: async (req, res, next) => {
        try {
            const { email, name, password } = req.body;
            const hashedPassword = await hash(password);

            Object.assign(req.body, { password: hashedPassword });

            await userService.insertUser(req.body);

            await emailService.sendMail(email, WELCOME, { userName: name });

            res.sendStatus(errors.USER_CREATED.code);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const user = req.body;

            await userService.updateUser(userId, user);

            const updatedUser = await userService.selectUserById(userId);

            res.status(errors.OK.code).json(updatedUser);
        } catch (e) {
            next(e);
        }
    },

    findAllUsers: async (req, res, next) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            const users = await userService.selectAllUsers(where, +limit, +offset) || [];

            res.status(errors.OK.code).json(users);
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

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await userService.deleteUser(userId);

            const users = await userService.selectAllUsers();

            res.status(errors.OK.code).json(users);
        } catch (e) {
            next(e);
        }
    }
};
