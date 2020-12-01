const path = require('path');

let isLoggedIn = false;
let loggedUser = '';
let errorMessage = '';
const usersPath = path.join(process.cwd(), 'users.json');

module.exports = {
    isLoggedIn,
    loggedUser,
    errorMessage,
    usersPath
};
