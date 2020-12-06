const { Router } = require('express');

const usersRouter = Router();

const { usersController } = require('../controllers');
// const { userExistMiddleware, userValidMiddleware } = require('../middleware');

usersRouter.post('/', usersController.createUser);

usersRouter.get('/', usersController.getAllUsers);

usersRouter.get('/:id', usersController.getUserById);

usersRouter.put('/:id', usersController.updateUser);

usersRouter.options('/:name', usersController.getFilteredUsers);

usersRouter.delete('/:id', usersController.deleteUser);

module.exports = usersRouter;
