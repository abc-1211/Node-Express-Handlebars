const connection = require("./connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
    selectAll: (cb) => {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            //console.log(result);
            cb (result);
        });
    },
    insertOne: (value, cb) => {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
        connection.query(queryString, [value], (err, result) => {
            if (err) throw err;
            //console.log(result);
            cb (result);
        })
    },
    updateOne: (id, cb) => {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
        queryString += id;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb (result);
        });
    }
};

module.exports = orm;