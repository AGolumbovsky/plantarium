const { Pool, Client } = require('pg');

module.exports = (app) => {

    var connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";

    const pool = new Pool({
        connectionString: connectionString
    });

    app.get('/api/latestReading', (req, res) => {

        pool.query('SELECT * from readings order by id desc', (err, data) => {

            if (err) {
                throw err;
            }
            
            console.log("SELECT query executed", data.rows[0]);
        
        })

    });

    app.post('/api/add', (req, res) => {

        pool.query(`INSERT INTO readings (reading, identifier)
                VALUES (255, 'take this now')`, (err, data) => {

            if (err) {
                throw err;
            }

            console.log("INSERT query executed", data.rows[0]);

        });
        
                
    });
}
