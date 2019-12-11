-- Mon domain

CREATE DATABASE IF NOT EXISTS immigration_consulting;

-- Mon utilisateur

CREATE USER IF NOT EXISTS 'guigma'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON immigration_consulting.* TO 'guigma'@'localhost';

-- selectionner la base de donnees

use immigration_consulting;

-- Mes Tables
                                                                                                     
 CREATE TABLE TYPE_VISAS (
 Type_visa INT AUTO_INCREMENT,
 Name VARCHAR(30) NOT NULL,
 Etudiant VARCHAR(35) NOT NULL,
 Resident_permanent VARCHAR(35) NOT NULL,
 Resident_temporaire VARCHAR(35) NOT NULL,
 Refugier VARCHAR(35) NOT NULL,
 PRIMARY KEY(Type_visa)
  );                                                                                       
    
    
                                                                                                     
  CREATE TABLE HONORAIRE_PAYMENTS (
  Honoraire_payment INT AUTO_INCREMENT,
  Periode Date,
  Name VARCHAR(30) NOT NULL,
  Especes INT,
  Carte_bancaire INT,
  Western_union INT,
  PRIMARY KEY(Honoraire_payment)
  );  
                                                                                                                                                                                                                      
                                                                                                     
  CREATE TABLE VILLE_RESIDEMCE (
   Name VARCHAR(30) NOT NULL,
   Ville VARCHAR(30) NOT NULL,
   Continent VARCHAR(30) NOT NULL
  
   );
  
                                                                                                     
   CREATE TABLE TYPE_SERVICES (
   Type_visa INT,
  Honoraire_payment INT,
  Type_service VARCHAR(30) NOT NULL,
  PRIMARY KEY(Type_visa, Honoraire_payment),
  FOREIGN KEY(Type_visa) 
     REFERENCES TYPE_VISAS(Type_visa),
  FOREIGN KEY( Honoraire_payment) 
     REFERENCES HONORAIRE_PAYMENTS (Honoraire_payment)
  );
                                                                                       
 
