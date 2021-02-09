const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mtg = require('mtgsdk');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './client/dist' )));

app.get('/', (req, res) => {
  res.status(200).send('Hello from Server')
})

app.get('/cards/white', (req, res) => {
  // axios({
  //   url: 'https://api.magicthegathering.io/v1/cards',
  //   params: {
  //     colorIdentity: 'W',
  //     setName: 'Double Masters'
  //   }
  // })
  //   .then(({data}) => {
  //     res.status(200).json(data);
  //   })
  mtg.card.where({ colorIdentity: 'W', setName: 'Double Masters' })
    .then(cards => {
      res.status(200).json(cards);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))