const { userService } = require('../services');

module.exports = {

    createUser: async (req, res) => {
        try {
            await userService.insertUser(req.body);

            res.sendStatus(201);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUser: (req, res) => {
        try {
            const { userId } = req.params;
            const user = req.body;

            userService.updateUser(userId, user)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(201).json(users);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    findAllUsers: async (req, res) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            const users = await userService.selectAllUsers(where, +limit, +offset) || [];

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    findUserById: (req, res) => {
        try {
            res.json(req.user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getFilteredUsers: (req, res) => {
        try {
            const { name } = req.params;

            userService.getFilteredUsers(name)
                .then((users) => {
                    res.status(200).json(users);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        try {
            const { userId } = req.params;

            userService.deleteUser(userId)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(200).json(users);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
