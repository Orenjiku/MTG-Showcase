const axios = require('axios');

module.exports = {
  getSets: (req, res) => {
    axios.get(`https://api.scryfall.com/sets/`)
    .then(({ data }) => {
      res.status(200).json(data.data);
    })
    .catch(err => {
      console.error('mtg set request failed');
      res.sendStatus(500);
    })
  },

  getMonoColoredCards: (req, res) => {
  const { setCode, colors } = req.params;
  axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=color=${colors}+set=${setCode}`)
    .then(({ data }) => {
      res.status(200).json(data.data);
    })
    .catch(err => {
      console.error(`${colors} colored cards request failed`);
      res.sendStatus(500);
    })
  },

  getMultiColoredCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=color=${'multicolor'}+set=${setCode}+-type=land+-border=borderless+-frame=extendedart`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('multicolored cards request failed');
        res.sendStatus(500);
      })
  },

  getColorlessCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=color=${'colorless'}+set=${setCode}+-type=land`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('colorless cards request failed');
        res.sendStatus(500);
      })
  },

  getBorderlessCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=border=borderless+set=${setCode}+-frame=extendedart+-frame=showcase`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('borderless cards request failed');
        res.sendStatus(500);
      })
  },

  getExtendedArtCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=frame=extendedart+set=${setCode}+-border=borderless+-frame=showcase`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error('extended art cards request failed');
        res.sendStatus(500);
      })
  },

  getShowcaseCards: (req, res) => {
    const { setCode } = req.params;
    axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=frame=showcase+set=${setCode}`)
    .then(({ data }) => {
      res.status(200).json(data.data);
    })
    .catch(err => {
      console.error('showcase cards request failed');
      res.sendStatus(500);
    })
  },

  getLandCards: (req, res) => {
    const { setCode, land } = req.params;
    axios.get(`https://api.scryfall.com/cards/search?order=rarity&dir=desc&q=set=${setCode}${land === 'land' ? '+type=land+-type=basic+-border=borderless' : '+type=basic'}`)
      .then(({ data }) => {
        res.status(200).json(data.data);
      })
      .catch(err => {
        console.error(`${land} cards request failed`);
        res.sendStatus(500);
      })
  },

}
