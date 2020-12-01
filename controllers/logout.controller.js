let isLoggedIn = require('../consts');

module.exports = {
    postLogout: (req, res) => {
        isLoggedIn = false;

        res.redirect('/');
    }
};
