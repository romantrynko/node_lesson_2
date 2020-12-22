/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const {
    PASSWORD, USERNAME
} = require('../config/config');
const { DATABASE_NAME } = require('../constants/constants');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
            host: '127.0.0.1',
            dialect: 'mysql'
        });

        const models = {};
        const modelsPath = path.join(process.cwd(), 'dataBase', 'models');

        const getModels = () => {
            fs.readdir(modelsPath, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    const modelFile = require(path.join(modelsPath, model));

                    models[model] = modelFile(client, DataTypes);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    };
})();
