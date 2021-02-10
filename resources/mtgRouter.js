const mtgRouter = require('express').Router();
const mtgController = require('./mtgController.js');

mtgRouter.get('/sets', mtgController.getSets);
mtgRouter.get('/cards/:setCode/land', mtgController.getLandCards);
mtgRouter.get('/cards/:setCode/colorless', mtgController.getColorlessCards);
mtgRouter.get('/cards/:setCode/multicolor', mtgController.getMultiColoredCards)
mtgRouter.get('/cards/:setCode/:colors', mtgController.getMonoColoredCards);

module.exports = mtgRouter;