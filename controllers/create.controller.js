/* eslint-disable no-console */
const fs = require('fs');

const {
    usersPath, isLoggedInPath, loggedUserPath
} = require('../path');

module.exports = {
    getCreate: (req, res) => {
        res.render('create');
    },

    postCreate: (req, res) => {
        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());

            fs.writeFile(isLoggedInPath, JSON.stringify({
                isLoggedIn: true
            }), (err1) => {
                console.log(err1);
            });

            users.push(req.body);
            fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
                // eslint-disable-next-line no-console
                console.log(err1);
            });
            res.status(201);
            res.redirect('/auth');
        });
    },

    getUsers: (req, res) => {
        let isLoggedIn;

        fs.readFile(isLoggedInPath, (err, data) => {
            if (err) {
                console.error(`Could not read from loggedUserPath ${err}`);
            }

            isLoggedIn = JSON.parse(data.toString()).isLoggedIn;

            if (!isLoggedIn) {
                res.redirect('/create');
                return;
            }

            fs.readFile(usersPath, (err1, data1) => {
                const users = JSON.parse(data1.toString());

                fs.readFile(loggedUserPath, (err2, data2) => {
                    const loggedUser = JSON.parse(data2.toString());

                    res.render('users', { users, name: loggedUser.loggedUser });
                });
            });
        });
    },

    deleteUser: (req, res) => {
        const { email } = req.body;

        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());
            users.filter((el) => {
                if (el.email === email) {
                    fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
                        console.log(err1);
                        res.render('users');
                    });
                }
            });
        });
    }
};
