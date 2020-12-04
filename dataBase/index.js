const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    user: 'root',
    password: 'root',
    database: 'usersdb',
    host: 'localhost'
});

module.exports = connection.promise();
