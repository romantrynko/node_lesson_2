const { Router } = require('express');
const { usersController } = require('../controllers');
const { emailPassMiddleware } = require('../middleware');
const { passHashMiddleware } = require('../middleware/auth-middleware/check-pass-hash.middleware');

const authRouter = Router();

authRouter.post(
    '/',
    emailPassMiddleware,
    passHashMiddleware,
    usersController.findAllUsers
);

module.exports = authRouter;
