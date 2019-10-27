
 -- Mon domaine

CREATE DATABASE IF NOT EXISTS network_IT;

-- Mon utilisateur

CREATE USER 'network_IT'@'localhost' IDENTIFIED BY 'AEK';

GRANT ALL ON network_IT.* TO 'network_IT'@'localhost';

-- selectionner la base de donnees

use network_IT;

-- Mes Tables

CREATE TABLE SOLUTION ( Nom VARCHAR(30) NOT NULL  
             solution INT AUTO_INCREMENT,  
             PRIMARY KEY(solution));
  
CREATE TABLE PRODUCTS ( Nom VARCHAR(30) NOT NULL, Date INT,
                     
CREATE TABLE INSTALLATION ( Nom VARCHAR(30) NOT NULL 
            installation INT AUTO_INCREMENT,
            PRIMARY KEY(installation)););
  
CREATE TABLE PRIX (Nom VARCHAR(30) NOT NULL, Tarif INT,
            PRIMARY KEY( solution, installation),
            FOREIGN KEY(solution) 
            REFERENCES SOLUTION(solution),
            FOREIGN KEY(instllation) 
            REFERENCES INSTALLATION(installation));
