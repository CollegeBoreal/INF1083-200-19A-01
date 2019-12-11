-- Mon domaine

CREATE DATABASE Hijabfashion;

-- Mon utilisateur

CREATE USER 'halima'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON Hijabfashion.* TO 'halima'@'localhost';


-- Selectionner la base de donnees 
 
use Hijabfashion;


-- Mes tables


CREATE TABLE Couleurs (
  
nom VARCHAR(30) NOT NULL,   
Couleurs INT  

);


 CREATE TABLE Pays_de_fabrication ( 
   
 nom VARCHAR(30) NOT NULL,
 devise VARCHAR(30) NOT NULL,
 Pays_de_fabrication INT
 
 );


CREATE TABLE Accessoires (
  
nom VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,   
Accessoires INT   

);


CREATE TABLE Prix (
  
nom VARCHAR(30) NOT NULL,
tarif VARCHAR(30) NOT NULL,
Prix INT

);


CREATE TABLE Tailles (   

largeur VARCHAR(30) NOT NULL,
longeur VARCHAR(30) NOT NULL,
unite_de_mesure VARCHAR(30) NOT NULL,
Tailles INT

);


CREATE TABLE Tissu (

nom VARCHAR(30) NOT NULL,   
Tissu INT 

);
