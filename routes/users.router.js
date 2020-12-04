const { Router } = require('express');

const usersRouter = Router();

const { usersController } = require('../controllers');
// const { userExistMiddleware, userValidMiddleware } = require('../middleware');

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/:id', usersController.getUserById);

// usersRouter.post('/', userExistMiddleware.checkUserIsPresent, usersController.createUser);

// usersRouter.get('/:email', userValidMiddleware.checkUserValidity, usersController.getUserByEmail);

// usersRouter.delete('/:email', usersController.deleteUser);

module.exports = usersRouter;
