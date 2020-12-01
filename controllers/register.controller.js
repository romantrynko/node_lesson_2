const fs = require('fs');

let { isLoggedIn, errorMessage } = require('../consts');
const usersPath = require('../consts');

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
                res.redirect('/error');

                errorMessage = 'User allready exists';
                return;
            }
            isLoggedIn = true;

            users.push(req.body);
            fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
                // eslint-disable-next-line no-console
                console.log(err1);
            });

            res.redirect('/login');
        });
    }
};

module.exports = isLoggedIn;
module.exports = errorMessage;
