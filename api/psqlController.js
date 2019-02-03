const { Pool, Client } = require('pg');

var connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";

const pool = new Pool({
    connectionString: connectionString
});

pool.query(`INSERT INTO readings (reading, identifier)
            VALUES (343, 'take this')`, (err, res) => {
    if (err) {
        throw err;
    }

    console.log("INSERT query executed", res);
    
              
});

pool.query('SELECT * from readings order by id desc', (err, res) => {

    if (err) {
        throw err;
    }

    console.log(res.rows[0]);
    pool.end();
  
})
// await pool.end();

