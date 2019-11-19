CREATE DATABASE technical_support;

CREATE USER 'technical_support'@'localhost' IDENTIFIED BY 'technical_support_1';
GRANT ALL ON technical_support.* TO 'technical_support'@'localhost';

use technical_support;

CREATE TABLE CLIENTS(
	client INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		     nom VARCHAR(30),
		    prenom VARCHAR(20)
	PRIMARY KEY(client)
);

CREATE TABLE SERVICES(
services INT AUTO_INCREMENT ,
BRAND VARCHAR(30) NOT NULL,
 problem VARCHAR(30) NOT NULL,
description VARCHAR(120)
	PRIMARY KEY(service)
FOREIGN KEY(client)
REFERENCES CLIENTS(client)
);

CREATE TABLE REPAIRS(
repair nom VARCHAR(30) NOT NULL,
 brand VARCHAR(30) NOT NULL
);

CREATE TABLE NOTES(
demarche VARCHAR(120)NOT NULL,
documentation VARCHAR(120) NOT NULL
);

CREATE TABLE PAYMENTS(
 nom VARCHAR(30) NOT NULL, 
 note INT
);
 
 
    CREATE TABLE VENTES(
      num_vente INT NOT NULL AUTO_INCREMENT 
      date_vente DATE,
      services INT,
      client INT,
PRIMARY KEY(client, service)
       FOREIGN KEY (client)
     REFERENCES CLIENTS (client),
     FOREIGN KEY (service)
    REFERENCES SERVICES(service)
);
