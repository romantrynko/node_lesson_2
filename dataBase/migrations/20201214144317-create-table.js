/* eslint-disable linebreak-style */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
const { CARS_TABLE } = require('../../constants/constants');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(CARS_TABLE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            model: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            year: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            price: {
                type: Sequelize.DataTypes.INTEGER,
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
        });
    },

    // eslint-disable-next-line no-unused-vars
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(CARS_TABLE);
    }
};
