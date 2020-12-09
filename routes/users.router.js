const { Router } = require('express');
const { usersController } = require('../controllers');
const { usersMiddleware, validationMiddleware } = require('../middleware');

const usersRouter = Router();

usersRouter.use('/:user_id', validationMiddleware.isIdCorrect, usersMiddleware.checkUserById);

usersRouter.post('/', validationMiddleware.isUserCreateCorrect, usersController.createUser);

usersRouter.get('/', usersController.findAllUsers);

usersRouter.options('/:name', usersController.getFilteredUsers);

usersRouter.get('/:user_id', usersController.findUserById);

usersRouter.put('/:user_id', validationMiddleware.isUserUpdateCorrect, usersController.updateUser);

usersRouter.delete('/:user_id', usersController.deleteUser);

module.exports = usersRouter;
