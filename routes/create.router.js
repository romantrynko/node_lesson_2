const { Router } = require('express');

const createRouter = Router();

const { createController } = require('../controllers');
const { createMiddleware } = require('../middleware');

createRouter.get('/', createController.getCreate);

createRouter.post('/', createMiddleware.checkUserPresent, createController.postCreate);

createRouter.get('/users', createController.getUsers);

createRouter.delete('/', createController.deleteUser);

module.exports = createRouter;
