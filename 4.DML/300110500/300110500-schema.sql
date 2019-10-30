-- Mon domain

CREATE DATABASE IF NOT EXISTS immigration_consulting;

-- Mon utilisateur

CREATE USER IF NOT EXISTS 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON immigration_consulting.* TO 'immigration_consulting'@'localhost';

-- selectionner la base de donnees

use immigration_consulting;

-- Mes Tables
                                                                                                     
 CREATE TABLE Type_visas (
 Code_suivi INT,
 Name VARCHAR(30) NOT NULL,
 Etudiant INT AUTO_INCREMENT,
 Resident_permanent VARCHAR(30) NOT NULL,
 Resident_temporaire VARCHAR(30) NOT NULL,
 Refugier VARCHAR(30) NOT NULL,
 PRIMARY KEY(Code_suivi)
  );                                                                                       
    
    

                                                                                                     
  CREATE TABLE Honoraire_payments (
  Montant_honoraire INT AUTO_INCREMENT,
  Periode Date,
  Name VARCHAR(30) NOT NULL 
  Especes INT,
  Carte_bancaire INT,
  Western_union INT,
  PRIMARY KEY(Montant_honoraire)
  );  
                                                                                                                                                                                                                      
                                                                                                     
  CREATE TABLE Ville_residence (
   Name VARCHAR(30) NOT NULL,
   Zone_afrque INT AUTO_INCREMENT,
   Zone_europe VARCHAR(30) NOT NULL,
   Zone_amerique VARCHAR(30) NOT NULL,
   PRIMARY KEY(Zone_afrique)
   );
  
                                                                                                     
   CREATE TABLE Type_services (
  Code suivi INT,
  Montant_honoraire INT,
  Service VARCHAR(30) NOT NULL,
  PRIMARY KEY(Code_suivi, Montant_honoraire),
  FOREIGN KEY(Code_suivi) 
     REFERENCES Code_suivi(Code_suivi),
  FOREIGN KEY(Montant_honoraire) 
     REFERENCES Montant_honoraire (Montant_honoraire)
  );
                                                                                       
 
