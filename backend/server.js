const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;

// Mongo dev url
const mongo_uri = 'mongodb://localhost:27017/mernsecond';

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Database successfully connected"));

app.use(cors());
app.use(bodyParser.json());

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});