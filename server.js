const util = require('util');
const express = require('express');
// const mongoose = require('mongoose');
// local modules
const apiController = require('./api/controllers/apiController');
require('./serialComm');
// const ReadingModelWTF = require('./api/readingModel');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/'));

const { Pool } = require('pg');

var connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";

const pool = new Pool({
    connectionString: connectionString
});

apiController(app); // no idea what's going on

app.listen(PORT, () => {
    // using util.log to provide timestamp for nodemon
    util.log("Now Is Good Time To Plant on port: ", PORT);
})