const { Router } = require('express');

const usersRouter = Router();

const { usersController } = require('../controllers');
const { userExistMiddleware } = require('../middleware');

usersRouter.get('/', usersController.getUsers);

usersRouter.post('/', userExistMiddleware.checkUserIsPresent, usersController.createUser);

usersRouter.get('/:email', usersController.getUser);

// usersRouter.delete('/:email', usersController.deleteUser);

module.exports = usersRouter;
