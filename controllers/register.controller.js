/* eslint-disable no-console */
const fs = require('fs');

const {
    usersPath, isLoggedInPath, errorMessagePath
} = require('../path');

module.exports = {
    getRegister: (req, res) => {
        res.render('register');
    },

    postRegister: (req, res) => {
        const { email, password } = req.body;

        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());
            const registeredUser = users.find((user) => user.email === email && user.password === password);

            if (registeredUser) {
                fs.writeFile(errorMessagePath, JSON.stringify({
                    errorMessage: 'User allready exists'
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

            users.push(req.body);
            fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
                // eslint-disable-next-line no-console
                console.log(err1);
            });

            res.redirect('/login');
        });
    }
};
