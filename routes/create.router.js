const { Router } = require('express');

const createRouter = Router();
const createController = require('../controllers/create.controller');

createRouter.get('/', createController.getCreate);

createRouter.post('/', createController.postCreate);

createRouter.get('/users', createController.getUsers);

module.exports = createRouter;
