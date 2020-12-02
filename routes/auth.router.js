const { Router } = require('express');

const authController = require('../controllers/auth.controller');

const authRouter = Router();

authRouter.get('/', authController.getLogin);

authRouter.post('/', authController.postLogin);

authRouter.get('/', authController.postLogout);

module.exports = authRouter;
