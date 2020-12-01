const { Router } = require('express');

const logoutController = require('../controllers/logout.controller');

const logoutRouter = Router();

logoutRouter.post('/', logoutController.postLogout);

module.exports = logoutRouter;
