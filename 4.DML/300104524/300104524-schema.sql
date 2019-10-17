CREATE DATABASE technical_support;

CREATE USER 'technical_support'@'localhost' IDENTIFIED BY 'technical_support_1';
GRANT ALL ON technical_support.* TO 'technical_support'@'localhost';

use technical_support;

CREATE TABLE REPAIRS (
 nom VARCHAR(30) NOT NULL,
 brand VARCHAR(30) NOT NULL,
PRIMARY KEY(technical_support)
);

CREATE TABLE SERVICES (
services INT AUTO_INCREMENT,
BRAND VARCHAR(30) NOT NULL,
 problem VARCHAR(30) NOT NULL,
description VARCHAR(120),
PRIMARY KEY(technical_support)
);

CREATE TABLE NOTES (
demarche VARCHAR(120)NOT NULL,
documentation VARCHAR(120) NOT NULL,
PRIMARY KEY(technical_support)
PRIMARY KEY(technical_support,services),
    FOREIGN KEY(technical_support)
REFERENCES SERVICES(technical_support),
    FOREIGN KEY(service)
REFERENCES SERVICES(services) 
);


CREATE TABLE PAYMENTS (nom VARCHAR(30) NOT NULL, note INT
);
