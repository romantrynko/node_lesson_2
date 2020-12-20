/* eslint-disable linebreak-style */
const {
    USERNAME, PASSWORD, DATABASE, HOST, DIALECT
} = require('./config');

module.exports = {
    development: {
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE,
        host: HOST,
        dialect: DIALECT
    }
};
