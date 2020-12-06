const { Router } = require('express');

const carsRouter = Router();

const { carsController } = require('../controllers');

carsRouter.post('/', carsController.createCar);

carsRouter.get('/', carsController.getAllCars);

carsRouter.get('/:id', carsController.getCarById);

carsRouter.put('/:id', carsController.updateCar);

carsRouter.options('/:model', carsController.getFilteredCars);

carsRouter.delete('/:id', carsController.deleteCar);

module.exports = carsRouter;
