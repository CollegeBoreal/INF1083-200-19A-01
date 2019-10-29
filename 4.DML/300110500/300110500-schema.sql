CREATE DATABASE IF NOT EXISTS immigration_consulting;


CREATE USER IF NOT EXISTS 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON immigration_consulting.* TO 'guigma'@'localhost';


use immigration_consulting;

                                                                                                     
 CREATE TABLE Type_visas (
 Name VARCHAR(30) NOT NULL,
 Etudiant INT AUTO_INCREMENT,
 Resident_permanent VARCHAR(30) NOT NULL,
 Resident_temporaire VARCHAR(30) NOT NULL,
 Refugier VARCHAR(30) NOT NULL,
 PRIMARY KEY(Etudiant)
  );                                                                                       
    
    
   
                                                                                                     
  CREATE TABLE Honoraire_payments (
  Name VARCHAR(30) NOT NULL 
  Especes INT AUTO_INCREMENT,
  Carte_bancaire INT,
  Western_union INT,
  PRIMARY KEY(Especes)
  );  
                                                                                                                                                                                                                      
                                                                                                     
  CREATE TABLE Ville_residence (
   Name VARCHAR(30) NOT NULL,
   Zone_afrque INT AUTO_INCREMENT,
   Zone_europe VARCHAR(30) NOT NULL,
   Zone_amerique VARCHAR(30) NOT NULL,
   PRIMARY KEY(Zone_afrique)
   );
  
                                                                                                     
   CREATE TABLE Type_services (
   Name VARCHAR(30) NOT NULL, 
   Demende_officielle VARCHAR(30) NOT NULL,
   Conseil_appui INT AUTO_INCREMENT,
   Documentation VARCHAR(30) NOT NULL,
   Annulation_demande VARCHAR(30) NOT NULL,
   PRIMARY KEYConseil_appui)
   );
                                                                                       
 
