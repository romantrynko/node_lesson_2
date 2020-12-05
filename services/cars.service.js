const db = require('../dataBase').getInstance();

module.exports = {
    createCar: (car_id, car_model, car_price, car_year, car_userId) => {
        const CarModel = db.getModel('Car');

        return CarModel.create({
            id: car_id,
            model: car_model,
            price: car_price,
            year: car_year,
            user_id: car_userId
        });
    },

    getAllCars: () => {
        const CarModel = db.getModel('Car');

        return CarModel.findAll();
    },

    getCarById: (id) => {
        const CarModel = db.getModel('Car');

        return CarModel.findByPk(id);
    }
};
