const express = require('express');
const app = express();
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/mobstergo', (err, db) => {
  if (err) {
      console.log('Unable to connect to the server');
  } else {
      console.log('Connected to Server successfully!');
  }
});

app.use(express.static('public'));
//parse json data
app.use(bodyParser.json());
//initialize routes
app.use('/api', routes);
//error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message})
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app fired up on port ${port}`);
});