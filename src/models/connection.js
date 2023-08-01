const mysql = require('mysql2/promise');

require('dotenv').config();

console.log(process.env.MYSQL_USER);

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: process.env.MY_SQL_PORT
});

module.exports = connection;