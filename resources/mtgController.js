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
