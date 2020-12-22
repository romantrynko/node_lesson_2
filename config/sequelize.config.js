/* eslint-disable linebreak-style */
require('dotenv').config();

const {
    USERNAME, PASSWORD
} = require('./config');
const { DATABASE_NAME } = require('../constants/constants');

module.exports = {
    development: {
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE_NAME,
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};
