-- Mon domaine

CREATE DATABASE IF NOT EXISTS Hijabfashion;

-- Mon utilisateur

CREATE USER IF NOT EXISTS 'halima'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON Hijabfashion.* TO 'halima'@'localhost';


-- Selectionner la base de donnees 
 
use Hijabfashion;


-- Mes tables

CREATE TABLE Couleurs (
couleur INT AUTO_INCREMENT, 
nom VARCHAR(30) NOT NULL,  
PRIMARY KEY (couleur)
 
 );


CREATE TABLE Prix (
prix INT AUTO_INCREMENT,
nom VARCHAR(30) NOT NULL,
tarif VARCHAR(30) NOT NULL,
PRIMARY KEY (prix)

);
 
 
 CREATE TABLE Tailles (
taille INT AUTO_INCREMENT,
largeur VARCHAR(30) NOT NULL,	
longeur VARCHAR(30) NOT NULL,
unite_de_mesure VARCHAR(30) NOT NULL,
PRIMARY KEY (taille)
);

CREATE TABLE Accessoires (
accessoire INT AUTO_INCREMENT,  
nom VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,   
PRIMARY KEY (accessoire)

);

 CREATE TABLE Pays_de_fabrication ( 
   
 nom VARCHAR(30) NOT NULL,
 devise VARCHAR(30) NOT NULL,
 Pays_de_fabrication INT
 
 );


CREATE TABLE Tissu (
taille INT,
prix INT,
couleur INT,
accessoire INT,
pays_de_fabrication INT,
tissu INT,
PRIMARY KEY ( taille, prix, couleur, accessoire, pays_de_fabrication),
FOREIGN KEY(taille) 
     REFERENCES Tailles(taille),
FOREIGN KEY(prix) 
     REFERENCES Prix(prix),
FOREIGN KEY(couleur) 
     REFERENCES Couleurs(couleur),
FOREIGN KEY(accessoire) 
     REFERENCES Accessoires(accessoire),
FOREIGN KEY(pays_de_fabrication) 
     REFERENCES Pays_de_fabrication(pays_de_fabrication)

 );
