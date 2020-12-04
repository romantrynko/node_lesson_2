// const fs = require('fs');
const db = require('../dataBase').getInstance();

module.exports = {

    findUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    insertUser: (user) => db.query(`INSERT INTO users (email) VALUES (${user.email})`), // dataBase.push(user);

    getUserById: (id) => {
        // dataBase[user_id]
        const UserModel = db.getModel('User');

        return UserModel.findByPk(id);
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
