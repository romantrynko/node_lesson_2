const fs = require('fs');

const { isLoggedIn, loggedUser } = require('../consts');
const usersPath = require('../consts');

module.exports = {
    getUsers: (req, res) => {
        if (!isLoggedIn) {
            res.redirect('/register');
            return;
        }
        fs.readFile(usersPath, (err, data) => {
            const users = JSON.parse(data.toString());

            res.render('users', { users, loggedUser });
        });
    }
};
