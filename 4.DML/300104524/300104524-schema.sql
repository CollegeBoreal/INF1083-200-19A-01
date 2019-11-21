CREATE DATABASE IF NOT EXISTS technical_support;

CREATE USER IF NOT EXISTS 'technical_support'@'localhost' IDENTIFIED BY 'technical_support_1';
GRANT ALL ON technical_support.* TO 'technical_support'@'localhost';

use technical_support;

CREATE TABLE CLIENTS(
	client INT NOT NULL AUTO_INCREMENT,
		     nom VARCHAR(30),
		    prenom VARCHAR(20),
	PRIMARY KEY(client)
);

CREATE TABLE SERVICES(
services INT AUTO_INCREMENT ,
BRAND VARCHAR(30) NOT NULL,
 problem VARCHAR(30) NOT NULL,
description VARCHAR(120),
	PRIMARY KEY(service),
FOREIGN KEY(client)
REFERENCES CLIENTS(client)
);

CREATE TABLE REPAIRS(
repair DATETIME VARCHAR(30) NOT NULL,
mac adress VARCHAR(30)
 brand VARCHAR(30) NOT NULL,
PRIMARY KEY(repair)
);

CREATE TABLE NOTES(
archivre_num INT(10) NOT NULL,
demarche VARCHAR(120)NOT NULL,
documentation VARCHAR(120) NOT NULL,
PRIMARY KEY(demarche)
);

CREATE TABLE PAYMENTS(
commande_num VARCHAR(30) NOT NULL,
article VARCHAR(30) NOT NULL,
quantity INT(10),
 note INT,
PRIMARY KEY(commande)
);
 
 
    CREATE TABLE VENTES(
      num_vente INT NOT NULL AUTO_INCREMENT, 
 article INT,
      services INT,
      client INT,
PRIMARY KEY(client, service),
       FOREIGN KEY(client)
     REFERENCES CLIENTS (client),
     FOREIGN KEY (service)
    REFERENCES SERVICES(service)
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
