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


CREATE TABLE Tissus (
tissu INT AUTO_INCREMENT,
nom VARCHAR(30) NOT NULL, 
PRIMARY KEY (tissu)
);


CREATE TABLE Accessoires (
accessoire INT AUTO_INCREMENT,  
nom VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,   
PRIMARY KEY (accessoire)

);


CREATE TABLE Pays_de_fabrication ( 
tissu INT,
accessoire INT,
pays_de_fabrication INT,
PRIMARY KEY ( tissu, accessoire),
FOREIGN KEY(tissu) 
     REFERENCES Tissu(tissu),
FOREIGN KEY(accessoire) 
     REFERENCES Accessoires(accessoire)
 
 );
