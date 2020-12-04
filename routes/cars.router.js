const { Router } = require('express');

const carsRouter = Router();

const { carsController } = require('../controllers');
// const { userExistMiddleware, userValidMiddleware } = require('../middleware');

carsRouter.get('/', carsController.getCars);

// usersRouter.post('/', userExistMiddleware.checkUserIsPresent, usersController.createUser);

// usersRouter.get('/:email', userValidMiddleware.checkUserValidity, usersController.getUserByEmail);

// usersRouter.delete('/:email', usersController.deleteUser);

module.exports = carsRouter;
