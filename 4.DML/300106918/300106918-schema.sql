
 -- Mon domaine

CREATE DATABASE IF NOT EXISTS network_IT;

-- Mon utilisateur

CREATE USER 'network_IT'@'localhost' IDENTIFIED BY 'AEK';

GRANT ALL ON network_IT.* TO 'network_IT'@'localhost';

-- selectionner la base de donnees

use network_IT;

-- Mes Tables

CREATE TABLE SOLUTIONS ( solution INT AUTO_INCREMENT, 
                       Nom VARCHAR(30) NOT NULL,
                       PRIMARY KEY(solution)
                       );
  
CREATE TABLE PRODUCTS ( Nom VARCHAR(30) NOT NULL, Date INT);
                     
CREATE TABLE INSTALLATIONS (installation INT AUTO_INCREMENT,
                           Nom VARCHAR(30) NOT NULL,
                           PRIMARY KEY(installation)
                           );
  
CREATE TABLE PRIX (Nom VARCHAR(30) NOT NULL, Tarif INT,
                   solution INT,
                   installation INT, 
                   prixx INT,
            PRIMARY KEY( solution,installation),
            FOREIGN KEY(solution) 
            REFERENCES SOLUTIONS(solution),
            FOREIGN KEY(installation) 
            REFERENCES INSTALLATIONS(installation)
                  );
