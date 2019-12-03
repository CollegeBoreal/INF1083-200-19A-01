-- Mon domaine

CREATE DATABASE IF NOT EXISTS  Jeuxvideos; 

-- Mon User

CREATE USER IF NOT EXISTS  'romeo'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON Jeuxvideos.* TO 'romeo'@'localhost';

-- selectionner la base de donnees 


use Jeuxvideos;


-- Mes tables


CREATE TABLE JEUX (
  
nom VARCHAR (4) NOT NULL,
categorie VARCHAR (4) NOT NULL,
jeux INT, 
 PRIMARY KEY(jeux) 
);



CREATE TABLE SUPPORTS (
  
nom VARCHAR (2) NOT NULL,
support INT,
PRIMARY KEY(support)  
);



CREATE TABLE CONSOLES (
  
nom VARCHAR (4) NOT NULL, 
support INT, 
PRIMARY KEY(support)   
);



CREATE TABLE VENTE_VIRTUELLES (
nom VARCHAR (2) NOT NULL,
vente_virtuelle INT,
PRIMARY KEY(vente_virtuelle) 
);



CREATE TABLE VENTE_PHYSIQUES (
nom VARCHAR (3) NOT NULL,
vente_physique INT,
PRIMARY KEY(vente_physique) 
);



CREATE TABLE DIFFUSIONS (
nom VARCHAR (2) NOT NULL,
diffusion INT,
PRIMARY KEY(diffusions) 
);

