/* eslint-disable linebreak-style */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('cars', {
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
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
        });
    },

    // eslint-disable-next-line no-unused-vars
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('cars');
    }
};
