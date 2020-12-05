const { Router } = require('express');

const carsRouter = Router();

const { carsController } = require('../controllers');

carsRouter.post('/', carsController.createCar);

carsRouter.get('/', carsController.getAllCars);

carsRouter.get('/:id', carsController.getCarById);

module.exports = carsRouter;
