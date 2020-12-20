const { CARS_TABLE } = require('../../constants/constants');

module.exports = (client, DataTypes) => {
    const Car = client.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        }
    }, {
        tableName: CARS_TABLE,
        timestamps: false
    });

    return Car;
};
