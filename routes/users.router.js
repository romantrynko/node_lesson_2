const { Router } = require('express');

const usersRouter = Router();

const { usersController } = require('../controllers');
const { usersMiddleware } = require('../middleware');

usersRouter.post('/', usersMiddleware.checkUserByEmail, usersMiddleware.checkUserByBodyId, usersController.createUser);

usersRouter.get('/', usersController.getAllUsers);

usersRouter.get('/:id', usersMiddleware.checkUserByParamsId, usersController.getUserById);

usersRouter.put('/:id', usersMiddleware.checkUserByParamsId, usersController.updateUser);

usersRouter.options('/:name', usersMiddleware.checkUserByName, usersController.getFilteredUsers);

usersRouter.delete('/:id', usersMiddleware.checkUserByParamsId, usersController.deleteUser);

module.exports = usersRouter;
