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
nom VARCHAR(10) NOT NULL,   
Couleurs INT,
PRIMARY KEY (couleur)

);


CREATE TABLE Prix (
prix INT AUTO_INCREMENT,
nom VARCHAR(10) NOT NULL,
tarif VARCHAR(10) NOT NULL,
Prix INT,
PRIMARY KEY (prix)

);


CREATE TABLE Tailles (   
taille INT AUTO_INCREMENT,
largeur VARCHAR(10) NOT NULL,
longeur VARCHAR(10) NOT NULL,
unite_de_mesure VARCHAR(10) NOT NULL,
Tailles INT,
PRIMARY KEY (taille)

);


CREATE TABLE Tissu (
tissu INT AUTO_INCREMENT,
nom VARCHAR(10) NOT NULL,   
Tissu INT, 
PRIMARY KEY (tissu)
);


CREATE TABLE Accessoires (
accessoire INT AUTO_INCREMENT,  
nom VARCHAR(10) NOT NULL,
type VARCHAR(10) NOT NULL,   
Accessoires INT,
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
