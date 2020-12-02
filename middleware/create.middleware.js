/* eslint-disable no-console */
const fs = require('fs');

const { usersPath, errorMessagePath } = require('../path');

module.exports = {
    checkUserPresent: (req, res, next) => {
        try {
            const email = req.body;

            fs.readFile(usersPath, (err, data) => {
                if (err) throw err;

                const users = JSON.parse(data.toString());
                const createdUser = users.find((user) => user.email === email);

                if (!createdUser) {
                    fs.writeFile(errorMessagePath, JSON.stringify({
                        errorMessage: 'User allready exists'
                    }), (err1) => {
                        console.log(err1);
                    });
                    res.render('errorPage');
                }
            });
            next();
        } catch (e) {
            res.status(400);
        }
    }
};
