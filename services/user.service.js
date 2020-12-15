const db = require('../dataBase').getInstance();

module.exports = {
    insertUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user);
    },

    updateUser: (userId, user) => {
        const UserModel = db.getModel('User');

        return UserModel.update(
            { ...user },
            { where: { id: userId } }
        );
    },

    selectAllUsers: (where = {}, limit = 3, offset = 0) => {
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

    selectUserById: (userId) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return UserModel.findByPk(userId, { include: CarModel });
    },

    deleteUser: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: {
                id: userId
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

    checkUserByParamsId: (userId) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: {
                id: userId
            }
        });
    },

    checkUserByBodyId: (userId) => {
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            where: {
                id: userId
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
