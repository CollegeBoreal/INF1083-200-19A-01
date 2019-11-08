CREATE DATABASE hairasset;



CREATE USER IF NOT EXISTS 'hairasset'@'localhost' IDENTIFIED BY 'hairasset_1';
GRANT ALL ON hairasset.* TO 'hairasset'@'localhost';


use hairasset;


CREATE TABLE  VENDEURS (
	
    	codev CHAR(6) NOT NULL PRIMARY KEY, 
	nom CHAR(40), 
	lieu CHAR(35), 
	commission INT, 
	telephone CHAR(15), 
	pays VARCHAR(25) );


CREATE TABLE  CLIENTS (	

	codec VARCHAR(6) NOT NULL PRIMARY KEY, 
	nom VARCHAR(40) NOT NULL, 
	ville CHAR(35), 
	lieu VARCHAR(35) NOT NULL, 
	pays VARCHAR(20) NOT NULL, 
	niveau INT, 
	montant INT NOT NULL, 
	dette INT NOT NULL, 
	telephone VARCHAR(17) NOT NULL, 
	codev CHAR(6) NOT NULL REFERENCES AGENTS
);   


CREATE TABLE  COMMANDES (

        numero INT NOT NULL PRIMARY KEY, 
	montant INT NOT NULL,  
	date DATE NOT NULL, 
	codec VARCHAR(6) NOT NULL REFERENCES CLIENT, 
	codev CHAR(6) NOT NULL REFERENCES VENDEURS, 
	description VARCHAR(60) NOT NULL
   );
