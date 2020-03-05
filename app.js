const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); //application/json
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/feed', feedRoutes);
app.use((err, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect('mongodb+srv://nodejs:zxcvbnmlp@cluster0-dnqwk.mongodb.net/messages')
  .then(result => {
    console.log('Localhost on port 8080');
    app.listen(8080);
  })
  .catch(err => console.log(err));
