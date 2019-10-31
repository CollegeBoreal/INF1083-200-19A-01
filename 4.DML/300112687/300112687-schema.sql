-- MON de Domaine


CREATE DATABASE Assurance;

-- Mon  Utilisateur


 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 
 
 use Assurance 
 
 -- Mes Tables

  
 CREATE TABLE Assurance (
 Nom VARCHAR(33) NOT NULL
 );
 
 
 CREATE TABLE ABONEMENT (
 nom VARCHAR (30) NOT NULL
 Mois int 
 );
 
 
 CREATE TABLE PAIEMENT(
 nom VARCHAR (40) NOT NULL
 type de paiement VACHAR (40) NOT NULL
 );
 
 
 CREATE TABLE SERVICE(
 Initale VARCHAR (59) NOT NULL
 Type de service VACHAR (30) NOT NULL
 
 );
 
 CREATE TABLE PRIX (
 Initiale VARCHAR (44)
 );
