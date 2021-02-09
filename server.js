const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mtg = require('mtgsdk');
const axios = require('axios');
const { filterOutBorderlessCards, sortByLegendary, selectCardProperties } = require('./mtgHelperFuncs.js')


const app = express();

app.use(morgan('dev'));
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './client/dist' )));

app.get('/', (req, res) => {
  res.status(200).send('Hello from Server')
})

app.get('/cards/:setName/:colors', (req, res) => {
  const { setName, colors } = req.params

  mtg.card.where({ colors, setName })
    .then(cards => {
      const mythic = [];
      const rare = [];
      const uncommon = [];
      const common = [];
      for (const card of cards) {
        if (card.colorIdentity.length === 1 && card.colors[0] === colors && card.types[0] !== 'Land') {
          if (card.rarity === 'Mythic') {
            filterOutBorderlessCards(card, mythic)
          } else if (card.rarity === 'Rare') {
            filterOutBorderlessCards(card, rare)
          } else if (card.rarity === 'Uncommon') {
            uncommon.push(selectCardProperties(card));
          } else if (card.rarity === 'Common') {
            common.push(selectCardProperties(card));
          }
        }
      };
      //sort by legendary type
      sortByLegendary(mythic);
      // sortByLegendary(rare);
      // sortByLegendary(uncommon);
      res.status(200).json(mythic.concat(rare, uncommon, common));
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))