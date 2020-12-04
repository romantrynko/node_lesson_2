const { userService } = require('../services');

module.exports = {

    // createUser: (req, res) => {
    //     try {
    //         userService.createUser(req.body).then((users) => {
    //             res.status(201).json(users);
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    getUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();

            // console.log(users);

            // users.forEach((user) => {
            //     console.log('====================================');
            //     console.log(user.email);
            //     console.log('====================================');
            // });

            res.json(users);
            // userService.getUsers(req.body).then((users) => {
            //     res.status(200).json(users);
            // });
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

    // getUserByEmail: (req, res) => {
    //     try {
    //         const { email } = req.params;
    //         userService.getUserByEmail(email).then((user) => {
    //             res.status(200).json(user);
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    // deleteUser: (req, res) => {
    //     try {
    //         const { email } = req.params;
    //         userService.deleteUser(email).then((users) => {
    //             res.status(200).json(users);
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // }
};
