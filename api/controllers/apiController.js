const { Pool } = require('pg');
const pool = require('../config/dbConnect');

module.exports = (app) => {

    /* const connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";

    const pool = new Pool({
        connectionString: connectionString
    }); */

    app.get('/api/latestReading', (req, res) => {

        var queryText = `SELECT * FROM readings ORDER BY id DESC`; // change to one last rdng
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }
            
            console.log("SELECT query executed");
            console.log("apiController sent rows:", data.rowCount);
            res.send(data);
        
        })

    });

    app.post('/api/dummyPopulate', (req, res) => {

        console.log("res is:", res.json());
        var reading = 686;
        var description = 'from apiController to the view';

        var queryText = `INSERT INTO readings (reading, identifier)
                        VALUES (${ reading }, 'from view to db dbl qs')`;
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }

            console.log("INSERT query executed", data);

        });
        
                
    });

}
