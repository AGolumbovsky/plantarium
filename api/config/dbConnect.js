const { Pool } = require('pg');

const connectionString = "postgres://plantr:ko00KO))@localhost/plantarium_db";

    
const pool = new Pool({
        connectionString: connectionString
    });

module.exports = pool;