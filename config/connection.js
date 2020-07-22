const mysql = require("mysql");

const connection = mysql.createConnection({
    user: "root",
    password: "",
    port: 3306,
    host: "localhost",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;