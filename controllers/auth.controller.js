/* eslint-disable no-console */
const fs = require('fs');

const {
    usersPath, isLoggedInPath, loggedUserPath
} = require('../path');

module.exports = {
    getLogin: (req, res) => {
        res.render('auth');
    },

    getByEmail: (req, res) => {
        const { email } = req.params;

        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());
            const user = users.find((el) => el.email === email);
            console.log(user);

            fs.writeFile(loggedUserPath, JSON.stringify({
                loggedUser: user.name
            }), (err1) => {
                console.log(err1);
            });

            res.redirect('/email');
        });
    },

    postLogin: (req, res) => {
        const { email, password } = req.body;

        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());
            const dataTrue = users.find((user) => user.email === email && user.password === password);
            console.log(dataTrue);
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
