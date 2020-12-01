/* eslint-disable no-console */
const fs = require('fs');

const { loggedUserPath, isLoggedInPath, usersPath } = require('../path');

module.exports = {
    getUsers: (req, res) => {
        let isLoggedIn;

        fs.readFile(isLoggedInPath, (err, data) => {
            if (err) {
                console.error(`Could not read from loggedUserPath ${err}`);
            }

            isLoggedIn = JSON.parse(data.toString()).isLoggedIn;

            if (!isLoggedIn) {
                res.redirect('/register');
                return;
            }

            fs.readFile(usersPath, (err1, data1) => {
                const users = JSON.parse(data1.toString());

                fs.readFile(loggedUserPath, (err2, data2) => {
                    const loggedUser = JSON.parse(data2.toString());

                    res.render('users', { users, name: loggedUser.loggedUser });
                    console.log(loggedUser);
                });
            });
        });
    }
};
