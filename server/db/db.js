const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "spender",
    host: "localhost",
    port: 5432,
    database: "spending_tracker"
})

module.exports = pool;