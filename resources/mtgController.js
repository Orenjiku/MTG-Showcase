const mtg = require('mtgsdk');
const axios = require('axios');
const { filterOutBorderlessCards, sortByLegendary, selectCardProperties } = require('../mtgHelperFuncs.js')

module.exports = {
  getCards: (req, res) => {
      const { setCode, colors } = req.params
      axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=color=${colors}+set=${setCode}`)
        .then(({ data }) => {
          res.status(200).json(data.data);
        })
        .catch(err => {
          console.error(err);
          res.sendStatus(500);
        })
    }
}


// mtg.card.where({ colors, setName })
// const mythic = [];
// const rare = [];
// const uncommon = [];
// const common = [];
// for (const card of cards) {
//   if (card.colorIdentity.length === 1 && card.colors[0] === colors && card.types[0] !== 'Land') {
//     if (card.rarity === 'Mythic') {
//       filterOutBorderlessCards(card, mythic)
//     } else if (card.rarity === 'Rare') {
//       filterOutBorderlessCards(card, rare)
//     } else if (card.rarity === 'Uncommon') {
//       uncommon.push(selectCardProperties(card));
//     } else if (card.rarity === 'Common') {
//       common.push(selectCardProperties(card));
//     }
//   }
// };
// sortByLegendary(mythic);
// sortByLegendary(rare);
// sortByLegendary(uncommon);
// res.status(200).json(mythic.concat(rare, uncommon, common));