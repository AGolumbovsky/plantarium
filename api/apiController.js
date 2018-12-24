const Reading = require('../api/readingModel'); // wtf, doesn't work if reference 'readingModel'

console.log("Reading model is successfully required" + Reading);

module.exports = (app) => {

    app.get('/api/readings', (req, res) => {

        Reading.find({}, (err, data) => {

            if(err) throw err;

            res.send(data);
        });

        console.log("app.get works!");

    });

    app.post('/api/add', (req, res) => {

        var newReading = new Reading({

            reading: 5555555,
            identifier: "test identifieer numero dos"

        });

        newReading.save((err, data) => {

            if(err) throw err;

            res.send(data);

        });

        console.log("app.post works!");

    })

}