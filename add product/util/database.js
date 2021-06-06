const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'locathost',
    user: 'root',
    database: 'node-complete',
    password: 'password@0987'
});

module.exports = pool.promise();
