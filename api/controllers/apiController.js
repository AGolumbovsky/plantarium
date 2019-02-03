const { Pool, Client } = require('pg');

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
            
            console.log("SELECT query executed", data);
            console.log("apiController sent:", data.rowCount);
            res.send(data);
        
        })

    });

    app.post('/api/add', (req, res) => {

        var queryText = `INSERT INTO readings (reading, identifier)
                        VALUES (255, 'take this now')`
        pool.query(queryText, (err, data) => {

            if (err) {
                throw err;
            }

            console.log("INSERT query executed", data.rows[0]);

        });
        
                
    });
}
