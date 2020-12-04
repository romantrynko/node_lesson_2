// const fs = require('fs');
const db = require('../dataBase');

module.exports = {

    findUsers: () => {
        db.query('SELECT * FROM users');
    },

    insertUser: () => {
        // dataBase.push(user);
    },

    findUserById: () => {
        // dataBase[user_id]
    }

    // createUser: (user) => {
    //     let users;
    //     return new Promise((resolve, reject) => {
    //         fs.readFile(usersPath, (err, data) => {
    //             if (err) reject(err);

    //             users = JSON.parse(data.toString());

    //             users.push(user);
    //             fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
    //                 if (err1) reject(err1);

    //                 resolve(users);
    //             });
    //         });
    //     });
    // },

    // getUsers: () => {
    //     let users;
    //     return new Promise((resolve, reject) => {
    //         fs.readFile(usersPath, (err, data) => {
    //             if (err) reject(err);

    //             users = JSON.parse(data.toString());

    //             resolve(users);
    //         });
    //     });
    // },

    // getUserByEmail: (email) => new Promise((resolve, reject) => {
    //     fs.readFile(usersPath, (err, data) => {
    //         if (err) reject(err);

    //         const users = JSON.parse(data.toString());
    //         const user = users.find((user1) => user1.email === email);

    //         resolve(user);
    //     });
    // }),

    // deleteUser: (email) => new Promise((resolve, reject) => {
    //     fs.readFile(usersPath, (err, data) => {
    //         if (err) reject(err);

    //         const users = JSON.parse(data.toString());
    //         const filteredUsers = users.filter((user) => user.email !== email);

    //         fs.writeFile(usersPath, JSON.stringify(users), (err1) => {
    //             if (err1) reject(err1);

    //             resolve(filteredUsers);
    //         });
    //     });
    // })
};
