/* eslint-disable no-console */
const fs = require('fs');

const { isLoggedInPath, loggedUserPath} = require('../path');

module.exports = {
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
