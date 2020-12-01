const errorMessage = require('../consts');

module.exports = {
    getError: (req, res) => {
        res.render('errorPage', { errorMessage });
    }
};
