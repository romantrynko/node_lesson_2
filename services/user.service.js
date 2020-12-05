// const fs = require('fs');
const { Op } = require('sequelize');
const db = require('../dataBase').getInstance();

module.exports = {

    createUser: (user_id, user_name, user_email, user_password) => {
        const UserModel = db.getModel('User');

        return UserModel.create({
            id: user_id,
            name: user_name,
            email: user_email,
            password: user_password
        });
    },

    getAllUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    getUserById: (id) => {
        const UserModel = db.getModel('User');

        return UserModel.findByPk(id);
    },

    getFilteredUsers: (user_id, user_name, user_email) => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({
            where: {
                [Op.or]: [
                    { id: user_id },
                    { name: user_name },
                    { email: user_email }
                ]
            }
        });
    },

    // updateUser: (id, name, email) => {
    //     const UserModel = db.getModel('User');

    //     return UserModel.update({})
    // },

    deleteUser: (user_id) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: {
                id: user_id
            }
        });
    }
};
