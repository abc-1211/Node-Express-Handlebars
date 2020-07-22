CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);