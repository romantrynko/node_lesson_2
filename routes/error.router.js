const { Router } = require('express');

const errorController = require('../controllers/error.controller');

const errorRouter = Router();

errorRouter.get('/', errorController.getError);

module.exports = errorRouter;
