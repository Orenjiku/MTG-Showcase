const mtgRouter = require('express').Router();
const mtgController = require('./mtgController.js');

mtgRouter.get('/:setCode/:colors', mtgController.getCards);

module.exports = mtgRouter;