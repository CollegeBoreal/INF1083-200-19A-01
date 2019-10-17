
 -- Mon domaine

CREATE DATABASE network_IT;

-- Mon utilisateur

CREATE USER 'network_IT'@'localhost' IDENTIFIED BY 'AEK';

GRANT ALL ON network_IT.* TO 'network_IT'@'localhost';

-- selectionner la base de donnees

use network_IT;

-- Mes Tables

CREATE TABLE SOLUTION ( Nom VARCHAR(30) NOT NULL );
  
CREATE TABLE PRODUCTS ( Nom VARCHAR(30) NOT NULL, Date INT );
  
  CREATE TABLE INSTALLATION ( Nom VARCHAR(30) NOT NULL );
  
  CREATE TABLE PRIX (Nom VARCHAR(30) NOT NULL, Tarif INT);
