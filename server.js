const util = require('util');
const express = require('express');
// local modules
const apiController = require('./api/controllers/apiController');
// require('./serialComm');

const app = express();

const PORT = process.env.PORT || 8888;

app.use(express.static(__dirname + '/'));

apiController(app); // no idea what's going on

app.listen(PORT, () => {
    // using util.log to provide timestamp for nodemon
    util.log("Now Is Good Time To Plant on port: ", PORT);
})