const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var readingSchema = new Schema({

    reading: Number,
    identifier: String

});

var Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;