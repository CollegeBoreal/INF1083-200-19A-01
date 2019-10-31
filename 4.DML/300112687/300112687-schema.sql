-- MON de Domaine


CREATE DATABASE Assurance;

-- Mon  Utilisateur


 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 
 
 use Assurance 
 
 -- Mes Tables

  
 CREATE TABLE Assurance (
 NAME VARCHAR(33) NOT NULL
  PRIMARY KEY NAME 
 );
 
 
 CREATE TABLE ABONEMENT (
 NAME VARCHAR (30) NOT NULL
 MONTHS int 
 );
 
 
 CREATE TABLE PAIEMENT(
 NAME VARCHAR (40) NOT NULL
 type of payement VARCHAR (40) NOT NULL
 );
 
 
 CREATE TABLE SERVICES(
 Initale VARCHAR (25) NOT NULL
 Type of services VARCHAR (30) NOT NULL
 
 );
 
 CREATE TABLE PRICES (
 Initiale VARCHAR (44)
  Price int 
 );
 
