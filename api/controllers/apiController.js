const { Pool } = require('pg');

module.exports = (app) => {

    const connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";

    const pool = new Pool({
        connectionString: connectionString
    });

    app.get('/api/latestReading', (req, res) => {

        var queryText = 'SELECT * FROM readings ORDER BY id DESC';
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }
            
            console.log("SELECT query executed");
            console.log("apiController sent rows:", data.rowCount);
            res.send(data);
        
        })

    });

    app.post('/api/add', (req, res) => {

        var queryText = `INSERT INTO readings (reading, identifier)
                        VALUES (888, 'from apiController to the view')`
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }

            console.log("INSERT query executed", data.rows);

        });
        
                
    });
}
