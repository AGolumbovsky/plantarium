const { Pool } = require('pg');
const pool = require('../config/dbConnect');
const cors = require('cors');
const emailer = require('../emailer');

module.exports = (app) => {

    app.use(cors());
    app.options('*', cors());

    app.get('/api/latestReading', (req, res) => {

        let queryText = `SELECT * FROM readings ORDER BY id DESC LIMIT 1`; // change to one last rdng
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }
            
            console.log("SELECT query executed");
            console.log(`apiController sent ${data.rows[0].reading}`);
            res.send(data);

            if (data.rows[0].reading <= 400) {
                emailer(data.rows[0].reading);
            }
        })
    });

    app.post('/api/dummyPopulate', (req, res) => {

        console.log("res is:", res.json());
        let reading = 333;
        let description = 'from apiController to the view';

        let queryText = `INSERT INTO readings (reading, identifier)
                        VALUES (${ reading }, 'from view to db dbl qs')`;
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }

            console.log("INSERT query executed", data);

        });
        
                
    });

}
