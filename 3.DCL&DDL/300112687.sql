-- MON de Domaine
CREATE DATABASE Assurance;

-- Mon  Utilisateur
 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 
 
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 use la base de donnee
 
 -- Mes Tables

  
 CREATE TABLE Assurance (
 Nom VACHAR(33) NOT NULL
 );
 
 
 CREATE TABLE ABONEMENT (
 nom VACHAR (30) NOT NULL
 Mois int 
 );
 
 
 CREATE TABLE PAIEMENT(
 nom VACHAR (40) NOT NULL
 type de paiement VACHAR (40) NOT NULL
 );
 
 
 CREATE TABLE SERVICE(
 Initale VACHAR (59) NOT NULL
 Type de service VACHAR (30) NOT NULL
 
 );
 
 CREATE TABLE PRIX (
 Initiale VACHAR (44)
 );
