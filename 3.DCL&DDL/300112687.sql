-- MON de Domaine

CREATE DATABASE Assurance;

-- Mon  Utilisateur

 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 
 
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 
 
 use Assurance;
 
 
 -- Mes Tables

  
 CREATE TABLE Assurance (
 NAME VARCHAR(33) NOT NULL
  
 );
 
 CREATE TABLE ABONEMENT (
 NAME VARCHAR (30) NOT NULL
 MONTHS int
  
 );
 
 
 CREATE TABLE PAYEMENT(
 NAME VARCHAR (30) NOT NULL
 type OF PAYEMENT VARCHAR (30) NOT NULL
  
 );
 
 
 CREATE TABLE SERVICES(
 Initale VARCHAR (59) NOT NULL
 Type OF SERVICES VARCHAR (30) NOT NULL
 
 );
 
 CREATE TABLE PRICES (
 Initiale VARCHAR (44)
  PRICES int
  
 );
