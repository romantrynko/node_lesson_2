const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    user: 'root',
    password: 'left4dead88',
    database: 'june-2020',
    host: 'localhost'
});

module.exports = connection;
