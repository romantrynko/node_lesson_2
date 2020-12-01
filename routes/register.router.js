const { Router } = require('express');

const registerRouter = Router();
const registerController = require('../controllers/register.controller');

registerRouter.get('/', registerController.getRegister);

registerRouter.post('/', registerController.postRegister);

module.exports = registerRouter;
