const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgre',
    host: '127.0.0.1',
    database: ''
})
