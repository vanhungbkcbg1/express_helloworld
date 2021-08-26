const mysql = require ('mysql');
connection = mysql.createConnection({
    host: "mysql",
    user: "test",
    password: "test",
    database: "test"
});

module.exports.connection = connection;