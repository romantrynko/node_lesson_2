const db = require('../dataBase').getInstance();

module.exports = {
    insertUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    updateUser: (user_id, user) => {
        const UserModel = db.getModel('User');

        return UserModel.update(
            { ...user },
            { where: { id: user_id } }
        );
    },

    selectAllUsers: (where = {}, limit = 10, offset = 0) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findAll({
            where,
            limit,
            offset,
            include: {
                model: CarModel
            }
        });
    },

    selectUserById: (user_id) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findByPk(user_id, {
            include: {
                model: CarModel
            }
        });
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
