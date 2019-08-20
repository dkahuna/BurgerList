// the structure of MySQL workbench

CREATE DATABASE bugers_db;
DROP IF EXISTS bugers_db;

USE bugers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

