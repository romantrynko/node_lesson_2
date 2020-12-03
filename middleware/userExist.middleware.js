/* eslint-disable no-console */
const fs = require('fs');

const { usersPath } = require('../path');

module.exports = {
    checkUserIsPresent: (req, res, next) => {
        try {
            const { email } = req.body;

            fs.readFile(usersPath, (err, data) => {
                if (err) throw err;

                const users = JSON.parse(data.toString());
                const createdUser = users.find((user) => user.email === email);

                if (!createdUser) {
                    return next();
                }
                res.status(400).json('User already exists');
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};