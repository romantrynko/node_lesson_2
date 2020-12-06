const { userService } = require('../services');

module.exports = {

    createUser: (req, res) => {
        try {
            const {
                id,
                name,
                email,
                password
            } = req.body;

            userService.createUser(id, name, email, password)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(201).json(users);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUser: (req, res) => {
        try {
            const { id } = req.params;
            const user = req.body;

            userService.updateUser(id, user)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(201).json(users);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getAllUsers: (req, res) => {
        try {
            userService.getAllUsers()
                .then((users) => res.status(201).json(users));
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: (req, res) => {
        try {
            const { id } = req.params;

            userService.getUserById(id)
                .then((user) => {
                    res.status(200).json(user);
                });
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
            const { id } = req.params;

            userService.deleteUser(id)
                .then(() => userService.getAllUsers())
                .then((users) => {
                    res.status(200).json(users);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
