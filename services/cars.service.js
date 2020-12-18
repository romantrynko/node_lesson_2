const db = require('../dataBase').getInstance();

module.exports = {
    insertCar: (car) => {
        const CarModel = db.getModel('Car');

        return CarModel.create(car);
    },

    updateCar: (carId, car) => {
        const CarModel = db.getModel('Car');

        return CarModel.update(
            { ...car },
            { where: { id: carId } }
        );
    },

    selectAllCars: (where = {}, limit = 10, offset = 0) => {
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            where,
            limit,
            offset
        });
    },

    selectCarById: (carId) => {
        const CarModel = db.getModel('Car');

        return CarModel.findByPk(carId);
    },

    deleteCar: (carId) => {
        const CarModel = db.getModel('Car');
        return CarModel.destroy({
            where: {
                id: carId
            }
        });
    }
};
