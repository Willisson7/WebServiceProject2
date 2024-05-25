// db/connect.js
const mongoose = require('mongoose');
require('dotenv').config();

const initDb = (callback) => {
  const uri = process.env.MONGODB_URI;
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      console.log('Connected to MongoDB');
      callback();
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

module.exports = { initDb };
