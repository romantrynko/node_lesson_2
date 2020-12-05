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

            userService.createUser(id, name, email, password).then((user) => {
                userService.findUsers();
                res.status(201).json(user);
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            res.status(201).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserById: (req, res) => {
        try {
            const { id } = req.params;
            userService.getUserById(id).then((user) => {
                res.status(200).json(user);
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    // getFilteredUsers: (req, res) => {
    //     try {
    //         const { id, name, email } = req.params;
    //         userService.getFilteredUsers(id, name, email).then((user) => {
    //             res.status(200).json(user);
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const users = await userService.findUsers();

            userService.deleteUser(id);
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
