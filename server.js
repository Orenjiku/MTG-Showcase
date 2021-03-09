const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const mtgRouter = require('./resources/mtgRouter.js');

const app = express();

// app.use(morgan('dev'));
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use( express.static( path.join( __dirname, './client/dist' )));

app.get('/', (req, res) => {
  res.status(200).send('Hello from Server');
});

app.use(mtgRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));