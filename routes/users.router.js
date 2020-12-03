const { Router } = require('express');

const usersRouter = Router();

const { usersController } = require('../controllers');
const { userExistMiddleware, userValidMiddleware } = require('../middleware');

usersRouter.get('/', userValidMiddleware.checkUserValidity, usersController.getUsers);

usersRouter.post('/', userExistMiddleware.checkUserIsPresent, usersController.createUser);

usersRouter.get('/:email', userExistMiddleware.checkUserIsPresent, usersController.getUserByEmail);

// usersRouter.delete('/:email', usersController.deleteUser);

module.exports = usersRouter;
