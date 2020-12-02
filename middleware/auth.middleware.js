/* eslint-disable no-console */
const fs = require('fs');

const { usersPath, errorMessagePath } = require('../path');

module.exports = {
    checkUserValidity: (req, res, next) => {
        try {
            const { email, password } = req.body;

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
                    res.render('errorPage');
                }
            });
            next();
        } catch (e) {
            res.status(400);
        }
    }
};
