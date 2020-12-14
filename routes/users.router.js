const { Router } = require('express');
const { usersController } = require('../controllers');
const { usersMiddleware, validationMiddleware } = require('../middleware');

const usersRouter = Router();

usersRouter.use('/:userId', validationMiddleware.isIdCorrect, usersMiddleware.checkIsUserRegisteredById);

usersRouter.get('/', usersController.findAllUsers);

usersRouter.post('/', validationMiddleware.isUserCreateCorrect, usersController.createUser);

usersRouter.get('/:userId', usersController.findUserById);

usersRouter.options('/:name', usersController.getFilteredUsers);

usersRouter.put('/:userId', validationMiddleware.isUserUpdateCorrect, usersController.updateUser);

usersRouter.delete('/:userId', usersController.deleteUser);

module.exports = usersRouter;
