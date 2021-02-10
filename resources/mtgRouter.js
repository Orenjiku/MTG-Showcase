const mtgRouter = require('express').Router();
const mtgController = require('./mtgController.js');

mtgRouter.get('/sets', mtgController.getSets);
mtgRouter.get('/cards/:setCode/mono/:colors', mtgController.getMonoColoredCards);
mtgRouter.get('/cards/:setCode/multicolor', mtgController.getMultiColoredCards)
mtgRouter.get('/cards/:setCode/colorless', mtgController.getColorlessCards);
mtgRouter.get('/cards/:setCode/borderless', mtgController.getBorderlessCards);
mtgRouter.get('/cards/:setCode/showcase', mtgController.getShowcaseCards)
mtgRouter.get('/cards/:setCode/:land', mtgController.getLandCards);

module.exports = mtgRouter;