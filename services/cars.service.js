const db = require('../dataBase').getInstance();

module.exports = {
    findCars: () => {
        const CarModel = db.getModel('Car');

        return CarModel.findAll();
    }
};
