const mysql = require ('mysql');
const config = require('./db.config');
connection = mysql.createPool(config);
module.exports = connection;