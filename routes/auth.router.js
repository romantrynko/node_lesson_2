const { Router } = require('express');
const { usersController } = require('../controllers');
const { checkPassHashMid, emailPassMid } = require('../middleware/auth-middleware');

const authRouter = Router();

authRouter.post(
    '/',
    emailPassMid,
    checkPassHashMid,
    usersController.findAllUsers
);

module.exports = authRouter;
