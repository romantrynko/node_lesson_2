/* eslint-disable no-console */
const fs = require('fs');

const { errorMessagePath } = require('../path');

module.exports = {
    getError: (req, res) => {
        fs.readFile(errorMessagePath, (err, data) => {
            const errorMessage = JSON.parse(data.toString());

            res.render('errorPage', { message: errorMessage.errorMessage });
        });
    }
};
