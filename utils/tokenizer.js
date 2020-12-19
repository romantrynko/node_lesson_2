const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'MEGA_KEY', { expiresIn: '1h' });
    const refresh_token = jwt.sign({}, 'SUPER_MEGA_KEY', { expiresIn: '20h' });

    return {
        access_token,
        refresh_token
    };
};
