const express = require('express');
const mongoose = require('mongoose');
// local modules
const apiController = require('./api/apiController');
const Reading = require('./api/readingModel');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/public'));

// get rid of deprecation warning, idk wtf
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/Readings');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "mongoose connection error: "));
db.once('open', () => {
    console.log("db connected, mongoose did it!");
})

apiController(app); // no idea what's going on

// create a timestamp for nodemon
var currentDate = new Date();
var timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

app.listen(PORT, () => {
    console.log("Now Is Good Time To Plant on port: ", PORT);
})