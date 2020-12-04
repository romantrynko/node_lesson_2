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
            const [users] = await userService.findUsers();

            console.log(users);

            res.json('xxx');
            // userService.getUsers(req.body).then((users) => {
            //     res.status(200).json(users);
            // });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }

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
