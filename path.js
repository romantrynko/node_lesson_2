/* eslint-disable no-console */
const path = require('path');

const isLoggedInPath = path.join(process.cwd(), 'constants', 'isLoggedIn.json');
const errorMessagePath = path.join(process.cwd(), 'constants', 'errorMessage.json');
const loggedUserPath = path.join(process.cwd(), 'constants', 'loggedUser.json');
const usersPath = path.join(process.cwd(), 'users.json');

module.exports = {
    isLoggedInPath,
    errorMessagePath,
    loggedUserPath,
    usersPath
};
