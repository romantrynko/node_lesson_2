const { carsService } = require('../services');
const { errors } = require('../error');

module.exports = {
    createCar: async (req, res, next) => {
        try {
            Object.assign(req.body);

            await carsService.createCar(req.body);

            res.status(errors.CAR_CREATED.code);
        } catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try {
            const { carId } = req.params;
            const car = req.body;

            await carsService.updateCar(carId, car);

            const updatedCar = await carsService.selectCarById(carId);

            res.status(errors.OK.cose).json(updatedCar);
        } catch (e) {
            next(e);
        }
    },

    findAllCars: async (req, res, next) => {
        try {
            const { limit = 10, page = 1, ...where } = req.query;
            const offset = limit * (page - 1);

            const cars = await carsService.selectAllCars(where, +limit, +offset) || [];

            res.status(errors.OK.code).json(cars);
        } catch (e) {
            next(e);
        }
    },

    findCarById: (req, res, next) => {
        try {
            res.json(req.car);
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { carId } = req.params;

            await carsService.deleteCar(carId);

            const cars = await carsService.selectAllCars();

            res.status(errors.OK.code).json(cars);
        } catch (e) {
            next(e);
        }
    }
};
