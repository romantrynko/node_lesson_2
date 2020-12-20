/* eslint-disable linebreak-style */
require('dotenv').config();

const {
    USERNAME, PASSWORD, HOST
} = require('./config');
const { DATABASE_NAME } = require('../constants/constants');

module.exports = {
    development: {
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE_NAME,
        host: HOST,
        dialect: 'mysql'
    }
};
