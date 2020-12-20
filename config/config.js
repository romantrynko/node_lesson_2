require('dotenv').config();

module.exports = {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN || 'ACCESS_TOKEN',
    REFRESH_TOKEN: process.env.REFRESH_TOKEN || 'REFRESH_TOKEN',
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    HOST: process.env.HOST,
    ROOT_EMAIL: process.env.ROOT_EMAIL || 'gmail@gmail.com',
    ROOT_EMAIL_PASS: process.env.ROOT_EMAIL_PASS || 'qwerty123456',
    ROOT_EMAIL_SERVICE: process.env.ROOT_EMAIL_SERVICE || 'gmail'
};
