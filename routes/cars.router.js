const { Router } = require('express');
const { carsController } = require('../controllers');

const carsRouter = Router();

carsRouter.post('/', carsController.createCar);

carsRouter.get('/', carsController.getAllCars);

carsRouter.get('/:carId', carsController.getCarById);

carsRouter.put('/:carId', carsController.updateCar);

carsRouter.delete('/:carId', carsController.deleteCar);

module.exports = carsRouter;
