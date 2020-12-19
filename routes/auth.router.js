const { Router } = require('express');
const { authController } = require('../controllers');
const { checkPassHashMid, emailPassMid } = require('../middleware/auth-middleware');

const authRouter = Router();

authRouter.post(
    '/',
    emailPassMid,
    checkPassHashMid,
    authController.loginUser
);

module.exports = authRouter;
