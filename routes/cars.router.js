const { Router } = require('express');
const { carsController } = require('../controllers');

const carsRouter = Router();

carsRouter.post('/', carsController.createCar);

carsRouter.get('/', carsController.getAllCars);

carsRouter.get('/:id', carsController.getCarById);

carsRouter.put('/:id', carsController.updateCar);

carsRouter.options('/:model', carsController.getFilteredCars);

carsRouter.delete('/:id', carsController.deleteCar);

module.exports = carsRouter;
