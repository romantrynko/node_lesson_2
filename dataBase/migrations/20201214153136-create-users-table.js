/* eslint-disable linebreak-style */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
const { USERS_TABLE } = require('../../constants/constants');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(USERS_TABLE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        });
    },

    // eslint-disable-next-line no-unused-vars
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(USERS_TABLE);
    }
};
