const { Router } = require('express');

const { authController } = require('../controllers');
const { authMiddleware } = require('../middleware');

const authRouter = Router();

authRouter.get('/', authController.getLogin);

authRouter.post('/', authMiddleware.checkUserValidity, authController.postLogin);

authRouter.get('/', authController.postLogout);

authRouter.get('/:email', authController.getByEmail);

module.exports = authRouter;
