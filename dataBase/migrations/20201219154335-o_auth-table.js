/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
const { O_AUTH_TABLE } = require('../../constants/constants');

module.exports = {
    up: async (queryInterface, Sequelize, client) => {
        await queryInterface.createTable(O_AUTH_TABLE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            access_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            refresh_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true,
                reference: {
                    model: 'user',
                    key: 'id'
                }
            },
            created_at: {
                type: Sequelize.DataTypes.DATE,
                default: client.fn('NOW')
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(O_AUTH_TABLE);
    }
};
