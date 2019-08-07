CREATE DATABASE helpinghands_db;

USE helpinghands_db;

CREATE TABLE contact_information(
id INT NOT NULL AUTO_INCREMENT,
full_name VARCHAR (100) NOT NULL,
email VARCHAR (100) NOT NULL,
comm_sugg VARCHAR (500) NOT NULL,
PRIMARY KEY (id)
);