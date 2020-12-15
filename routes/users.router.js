const { Router } = require('express');
const { usersController } = require('../controllers');
const { usersMiddleware, validationMiddleware, userValidityMiddleware } = require('../middleware');

const usersRouter = Router();

usersRouter.get(
    '/',
    usersController.findAllUsers
);

usersRouter.post(
    '/',
    userValidityMiddleware,
    usersMiddleware.checkIsUserRegisteredByEmail,
    validationMiddleware.isUserCreateCorrect,
    usersController.createUser
);

usersRouter.get(
    '/:userId',
    validationMiddleware.isIdCorrect,
    usersMiddleware.checkIsUserRegisteredById,
    usersController.findUserById
);

usersRouter.put(
    '/:userId',
    usersMiddleware.checkIsUserRegisteredById,
    validationMiddleware.isIdCorrect,
    validationMiddleware.isUserUpdateCorrect,
    usersController.updateUser
);

usersRouter.delete(
    '/:userId',
    validationMiddleware.isIdCorrect,
    usersMiddleware.checkIsUserRegisteredById,
    usersController.deleteUser
);

module.exports = usersRouter;
