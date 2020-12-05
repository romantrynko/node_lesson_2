const { carsService } = require('../services');

module.exports = {
    createCar: (req, res) => {
        try {
            const {
                id,
                model,
                price,
                year,
                user_id
            } = req.body;

            carsService.createCar(id, model, price, year, user_id)
                .then(() => carsService.getAllCars())
                .then((cars) => {
                    res.status(201).json(cars);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getAllCars: (req, res) => {
        try {
            carsService.getAllCars()
                .then((cars) => res.status(201).json(cars));
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getCarById: (req, res) => {
        try {
            const { id } = req.params;

            carsService.getCarById(id)
                .then((car) => {
                    res.status(200).json(car);
                });
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
