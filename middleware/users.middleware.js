const userService = require('../services/user.service');

module.exports = {

    checkUserByEmail: (req, res, next) => {
        try {
            const { email } = req.body;
            userService.checkUserByEmail(email).then((user) => {
                if (user) {
                    res.status(400).json('User with such email allready exists');
                }
                next();
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkUserByParamsId: (req, res, next) => {
        try {
            const { id } = req.params;
            userService.checkUserByParamsId(id).then((user) => {
                if (!user) {
                    res.status(400).json("User with such id doesn't exist");
                }
                next();
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkUserByName: (req, res, next) => {
        try {
            const { name } = req.params;
            userService.checkUserByName(name).then((user) => {
                if (!user) {
                    res.status(400).json('User name doesnt exist');
                }
                next();
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    checkUserByBodyId: (req, res, next) => {
        try {
            const { id } = req.body;
            userService.checkUserByBodyId(id).then((user) => {
                if (user) {
                    res.status(400).json('User with such id allready exist');
                }
                next();
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
