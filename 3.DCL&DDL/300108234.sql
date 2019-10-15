-- Mon domaine

CREATE DATABASE Hijabfashion;

-- Mon USER 

CREATE USER 'halima'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON halima.* TO 'halima'@'localhost';


-- selectionner la base de donnees 
 
use Hijabfashion;


-- Mes tables


CREATE TABLE Couleurs (
  
nom VARCHAR(10) NOT NULL,   
Couleurs INT  

);


 CREATE TABLE Pays_de_fabrication ( 
   
 nom VARCHAR(10) NOT NULL,
 devise VARCHAR(10) NOT NULL,
 Pays_de_fabrication INT
 
 );



CREATE TABLE Accessoires (
  
nom VARCHAR(10) NOT NULL,
type VARCHAR(10) NOT NULL,   
Accessoires INT   

);

CREATE TABLE Prix (
  
nom VARCHAR(10) NOT NULL,
tarif VARCHAR(10) NOT NULL,
Prix INT

);



CREATE TABLE Tailles (   

largeur VARCHAR(10) NOT NULL,
longeur VARCHAR(10) NOT NULL,
unite_de_mesure VARCHAR(10) NOT NULL,
Tailles INT

);


CREATE TABLE Tissu (

nom VARCHAR(10) NOT NULL,   
Tissu INT 

);
