-- MON de Domaine


CREATE DATABASE Assurance;

-- Mon  Utilisateur


 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 
 
 use Assurance 
 
 -- Mes Tables

  
 CREATE TABLE Clients (
  num_clinet INT NOT NULL (23) 
  nom VARCHAR(33) NOT NULL
 
 );
 
 
 CREATE TABLE ABONEMENT (
  
 nom VARCHAR (30) NOT NULL,
       mois INT(24) NOT NULL, 
 type d'abonement VARCHAR (24) NOT NULL 
 );
 
 
 CREATE TABLE PAIEMENT  (
    nom VARCHAR(40) NOT NULL,
  
   num_client INT NOT NULL ,
  mois VARCHAR (40) NOT NULL 
 );
 
 CREATE TABLE SERVICES(
  
    name VARCHAR (25) NOT NULL,
 Type de services VARCHAR (30) NOT NULL
 );
 
 CREATE TABLE Prices (
  
 nom VARCHAR (25) NOT NULL,
 prix INT (14)
  
 );
  
 
