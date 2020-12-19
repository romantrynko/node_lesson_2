const { Router } = require('express');
const { usersController } = require('../controllers');
const {
    usersMiddleware, validationMiddleware, userValidityMiddleware, userUpdateMiddleware
} = require('../middleware/users');
const { checkAccessToken } = require('../middleware/auth-middleware');

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
    checkAccessToken,
    validationMiddleware.isIdCorrect,
    usersMiddleware.checkIsUserRegisteredById,
    usersController.findUserById
);

usersRouter.put(
    '/:userId',
    checkAccessToken,
    userUpdateMiddleware,
    usersMiddleware.checkIsUserRegisteredById,
    validationMiddleware.isIdCorrect,
    validationMiddleware.isUserUpdateCorrect,
    usersController.updateUser
);

usersRouter.delete(
    '/:userId',
    checkAccessToken,
    validationMiddleware.isIdCorrect,
    usersMiddleware.checkIsUserRegisteredById,
    usersController.deleteUser
);

module.exports = usersRouter;
