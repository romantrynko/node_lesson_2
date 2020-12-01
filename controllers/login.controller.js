const fs = require('fs');

let {
    errorMessage, isLoggedIn, loggedUser
} = require('../consts');
const usersPath = require('../consts');

module.exports = {
    getLogin: (req, res) => {
        res.render('login');
    },

    postLogin: (req, res) => {
        const { email, password } = req.body;

        fs.readFile(usersPath, (err, data) => {
            if (err) throw err;

            const users = JSON.parse(data.toString());
            const emailTrue = users.find((user) => user.email === email && user.password === password);

            if (!emailTrue) {
                errorMessage = 'Check your email and password';

                res.redirect('/error');
                return;
            }
            isLoggedIn = true;
            loggedUser = emailTrue.name;

            res.redirect('/users');
        });
    }
};

module.exports = isLoggedIn;
module.exports = loggedUser;
module.exports = errorMessage;
