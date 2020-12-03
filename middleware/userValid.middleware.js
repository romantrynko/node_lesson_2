/* eslint-disable no-console */
const fs = require('fs');

const { usersPath } = require('../path');

module.exports = {
    checkUserValidity: (req, res, next) => {
        try {
            const { email, password } = req.body;

            fs.readFile(usersPath, (err, data) => {
                if (err) throw err;

                const users = JSON.parse(data.toString());
                const dataTrue = users.find((user) => user.email === email && user.password === password);

                if (!dataTrue) {
                    res.status(400).json('Invalid email or password');
                }
                return next();
            });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
