CREATE DATABASE technical_support;

CREATE USER 'technical_support'@'localhost' IDENTIFIED BY 'technical_support_1';
GRANT ALL ON technical_support.* TO 'technical_support'@'localhost';

use technical_support;

CREATE TABLE clients(
	client INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		     nom VARCHAR(30),
		    prenom VARCHAR(20)
);

CREATE TABLE SERVICES(
services INT AUTO_INCREMENT PRIMARY KEY,
BRAND VARCHAR(30) NOT NULL,
 problem VARCHAR(30) NOT NULL,
description VARCHAR(120)
);

CREATE TABLE REPAIRS(
 nom VARCHAR(30) NOT NULL,
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
 
 CREATE TABLE ventes(
      num_vente INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      date_vente DATE,
      client_num INT,
       FOREIGN KEY (num_vente) REFERENCES ventes (num_vente),
     FOREIGN KEY (client_num) REFERENCES clients (client)
     );
