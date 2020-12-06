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

    updateCar: (car_id, car) => {
        const CarModel = db.getModel('Car');

        return CarModel.update(
            { ...car },
            { where: { id: car_id } }
        );
    },

    getAllCars: () => {
        const CarModel = db.getModel('Car');

        return CarModel.findAll();
    },

    getCarById: (id) => {
        const CarModel = db.getModel('Car');

        return CarModel.findByPk(id);
    },

    getFilteredCar: (car_model) => {
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            where: {
                model: car_model
            }
        });
    },

    deleteCar: (car_id) => {
        const CarModel = db.getModel('Car');
        return CarModel.destroy({
            where: {
                id: car_id
            }
        });
    }
};
