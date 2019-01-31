const Reading = require('../api/readingModel');

console.log("Reading model was successfully required" + Reading);

module.exports = (app) => {

    app.get('/api/readings', (req, res) => {


        Reading.find({}, (err, data) => {

            if(err) {
                throw err;
            }

            else {   
                console.log("data about to be sent")

                res.send(JSON.stringify(data));
            }
        });

        console.log("app.get works!");

    });


/*   
    below is for testing purposes.
    and it doesn't work.
    as intended.
*/

    // app.post('/api/add', (req, res) => {

    //     var newReading = new Reading({

    //         reading: 5555555,
    //         identifier: "test identifieer numero dos"

    //     });

    //     newReading.save((err, data) => {

    //         if(err) throw err;

    //         res.send(data);

    //     });

    //     console.log("app.post works!");

    // })

}