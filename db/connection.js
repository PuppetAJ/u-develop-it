const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PuppetAJDB!',
    database: 'election'
});

module.exports = db;