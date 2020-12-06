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

    updateUser: (user_id, user) => {
        const UserModel = db.getModel('User');

        return UserModel.update(
            { ...user },
            { where: { id: user_id } }
        );
    },

    getAllUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    getUserById: (id) => {
        const UserModel = db.getModel('User');

        return UserModel.findByPk(id);
    },

    getFilteredUsers: (user_name) => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({
            where: {
                name: user_name
            }
        });
    },

    deleteUser: (user_id) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: {
                id: user_id
            }
        });
    },

    checkUserByEmail: (user_email) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: {
                email: user_email
            }
        });
    },

    checkUserByParamsId: (user_id) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: {
                id: user_id
            }
        });
    },

    checkUserByBodyId: (user_id) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: {
                id: user_id
            }
        });
    },

    checkUserByName: (user_name) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: {
                name: user_name
            }
        });
    }
};
