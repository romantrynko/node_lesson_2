const { O_AUTH_TABLE } = require('../../constants/constants');

module.exports = (client, DataTypes) => {
    const O_Auth = client.define('O_Auth', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            reference: {
                model: 'users',
                key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            default: client.fn('NOW')
        }
    }, {
        tableName: O_AUTH_TABLE,
        timestamps: false
    });

    return O_Auth;
};