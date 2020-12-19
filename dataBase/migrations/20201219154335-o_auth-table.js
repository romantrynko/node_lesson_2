/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */

module.exports = {
    up: async (queryInterface, Sequelize, client) => {
        await queryInterface.createTable('o_auth', {
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
                    model: 'users',
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
        await queryInterface.dropTable('o_auth');
    }
};
