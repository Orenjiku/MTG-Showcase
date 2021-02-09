const mtgRouter = require('express').Router();
const mtgController = require('./mtgController.js');

mtgRouter.get('/:setName/:colors', mtgController.getCards);

module.exports = mtgRouter;