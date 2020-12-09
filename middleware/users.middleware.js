const { userService } = require('../services');

module.exports = {

    checkIsUserRegistered: async (req, res, next) => {
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

    checkUserById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await userService.selectUserById(id);

            if (!user) {
                throw new Error('User is not present');
            }
            req.user = user;

            next();
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    // checkUserByEmail: (req, res, next) => {
    //     try {
    //         const { email } = req.body;
    //         userService.checkUserByEmail(email).then((user) => {
    //             if (user) {
    //                 res.status(400).json('User with such email allready exists');
    //             }
    //             next();
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    // checkUserByParamsId: (req, res, next) => {
    //     try {
    //         const { id } = req.params;
    //         userService.checkUserByParamsId(id).then((user) => {
    //             if (!user) {
    //                 res.status(400).json("User with such id doesn't exist");
    //             }
    //             next();
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    // checkUserByName: (req, res, next) => {
    //     try {
    //         const { name } = req.params;
    //         userService.checkUserByName(name).then((user) => {
    //             if (!user) {
    //                 res.status(400).json('User name doesnt exist');
    //             }
    //             next();
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },

    // checkUserByBodyId: (req, res, next) => {
    //     try {
    //         const { id } = req.body;
    //         userService.checkUserByBodyId(id).then((user) => {
    //             if (user) {
    //                 res.status(400).json('User with such id allready exist');
    //             }
    //             next();
    //         });
    //     } catch (e) {
    //         res.status(400).json(e.message);
    //     }
    // },
};
