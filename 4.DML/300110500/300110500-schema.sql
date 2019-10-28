-- Mon domaine

CREATE DATABASE immigration;

-- Mon utilsateur

CREATE USER 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON immigration.* TO 'guigma'@'localhost';

-- selectionner la base de donnees
use immigration;

-- Mes Tables

CREATE TABLE Visas (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE Payments (
  initiale VARCHAR(35) NOT NULL
  );

CREATE TABLE Ville_residence (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE Ville_immigration (
  initiale VARCHAR(35) NOT NULL
  );
  
  
  CREATE TABLE Services (
  initiale VARCHAR(35) NOT NULL
  );

