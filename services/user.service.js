const fs = require('fs');
const { usersPath } = require('../path');

module.exports = {
    createUser: (user) => {
        let users;
        return new Promise((resolve, reject) => {
            fs.readFile(usersPath, (err, data) => {
                if (err) reject(err);

                users = JSON.parse(data.toString());

                users.push(user);
                fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
                    if (err1) reject(err1);
                    resolve(users);
                });
            });
        });
    },

    getUsers: () => {
        let users;
        return new Promise((resolve, reject) => {
            fs.readFile(usersPath, (err, data) => {
                if (err) reject(err);

                users = JSON.parse(data.toString());

                resolve(users);
            });
        });
    },

    getUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            fs.readFile(usersPath, (err, data) => {
                if (err) reject(err);

                const users = JSON.parse(data.toString());

                resolve(user);
            });
        })
    }
};
