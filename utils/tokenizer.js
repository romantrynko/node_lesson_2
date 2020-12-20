const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN, REFRESH_TOKEN } = require('../config/config');

module.exports = () => {
    const access_token = jwt.sign({}, ACCESS_TOKEN, { expiresIn: '1h' });
    const refresh_token = jwt.sign({}, REFRESH_TOKEN, { expiresIn: '20h' });

    return {
        access_token,
        refresh_token
    };
};
