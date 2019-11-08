-- Mon domaine

CREATE DATABASE IF NOT EXISTS Hijabfashion;

-- Mon utilisateur

CREATE USER IF NOT EXISTS 'halima'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON Hijabfashion.* TO 'halima'@'localhost';


-- Selectionner la base de donnees 
 
use Hijabfashion;


-- Mes tables

 
 CREATE TABLE ADRESSES(
  adresse INT AUTO_INCREMENT,
  rue VARCHAR(30) NOT NULL,
  ville VARCHAR(30) NOT NULL,
  code_postal VARCHAR(30) NOT NULL,
  PRIMARY KEY (adresse)
 
 );
 
 
CREATE TABLE CLIENTS(
adresse INT,
client INT,
PRIMARY KEY (adresse),
FOREIGN KEY(adresse) 
     REFERENCES ADRESSES(adresse)
 
 );



CREATE TABLE COULEURS(
couleur INT AUTO_INCREMENT, 
nom VARCHAR(30) NOT NULL,  
PRIMARY KEY (couleur)
 
 );


CREATE TABLE PRIX(
prix INT AUTO_INCREMENT,
nom VARCHAR(30) NOT NULL,
tarif VARCHAR(30) NOT NULL,
PRIMARY KEY (prix)

);
 
 
CREATE TABLE TAILLES(
taille INT AUTO_INCREMENT,
largeur VARCHAR(30) NOT NULL,	
longeur VARCHAR(30) NOT NULL,
unite_de_mesure VARCHAR(30) NOT NULL,
PRIMARY KEY (taille)
);

CREATE TABLE ACCESSOIRES(
accessoire INT AUTO_INCREMENT,  
nom VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,
PRIMARY KEY (accessoire)

);

 CREATE TABLE PAYS_DE_FABRICATION( 
 pays_de_fabrication INT AUTO_INCREMENT,  
 nom VARCHAR(30) NOT NULL,
 devise VARCHAR(30) NOT NULL,
 livraison Date,
 PRIMARY KEY (pays_de_fabrication)

 
 );


CREATE TABLE TISSUS(
taille INT,
prix INT,
couleur INT,
accessoire INT,
pays_de_fabrication INT,
tissu INT AUTO_INCREMENT,
nom VARCHAR (30) NOT NULL
 
PRIMARY KEY (tissu),
FOREIGN KEY(taille) 
     REFERENCES TAILLES(taille),
FOREIGN KEY(prix) 
     REFERENCES PRIX(prix),
FOREIGN KEY(couleur) 
     REFERENCES COULEURS(couleur),
FOREIGN KEY(accessoire) 
     REFERENCES ACCESSOIRES(accessoire),
FOREIGN KEY(pays_de_fabrication) 
     REFERENCES PAYS_DE_FABRICATION(pays_de_fabrication)

 );
