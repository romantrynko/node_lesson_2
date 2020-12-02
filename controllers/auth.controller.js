/* eslint-disable no-console */
const fs = require('fs');

const {
    usersPath, isLoggedInPath, errorMessagePath, loggedUserPath
} = require('../path');

module.exports = {
    getLogin: (req, res) => {
        res.render('auth');
    },

    postLogin: (req, res) => {
        const { email, password } = req.body;

        console.log(usersPath);

        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());
            const dataTrue = users.find((user) => user.email === email && user.password === password);

            if (!dataTrue) {
                fs.writeFile(errorMessagePath, JSON.stringify({
                    errorMessage: 'Check your email and password'
                }), (err1) => {
                    console.log(err1);
                });

                res.redirect('/error');
                return;
            }

            fs.writeFile(isLoggedInPath, JSON.stringify({
                isLoggedIn: true
            }), (err1) => {
                console.log(err1);
            });

            fs.writeFile(loggedUserPath, JSON.stringify({
                loggedUser: dataTrue.name
            }), (err1) => {
                console.log(err1);
            });

            res.redirect('/users');
        });
    },

    postLogout: (req, res) => {
        fs.writeFile(isLoggedInPath, JSON.stringify({
            isLoggedIn: false
        }), (err1) => {
            console.log(err1);
        });

        fs.writeFile(loggedUserPath, JSON.stringify({
            loggedUser: ''
        }), (err1) => {
            console.log(err1);
        });

        res.redirect('/');
    }
};
