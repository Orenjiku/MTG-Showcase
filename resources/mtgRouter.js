const mtgRouter = require('express').Router();
const mtgController = require('./mtgController.js');

mtgRouter.get('/sets', mtgController.getSets);
mtgRouter.get('/cards/:setCode/:colors', mtgController.getCards);

module.exports = mtgRouter;