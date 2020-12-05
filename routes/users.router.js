const { Router } = require('express');

const usersRouter = Router();

const { usersController } = require('../controllers');
// const { userExistMiddleware, userValidMiddleware } = require('../middleware');

usersRouter.get('/', usersController.getUsers);

usersRouter.get('/:id', usersController.getUserById);

usersRouter.post('/', usersController.createUser);

// usersRouter.get('/:filter', usersController.getFilteredUsers);

usersRouter.delete('/:id', usersController.deleteUser);

module.exports = usersRouter;
