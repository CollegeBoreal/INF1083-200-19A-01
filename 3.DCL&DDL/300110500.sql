-- Mon domaine

CREATE DATABASE immigration;

-- Mon utilsateur

CREATE USER 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON immigration.* TO 'guigma'@'localhost';

-- selectionner la base de donnees

use immigration;

-- Mes Tables

CREATE TABLE Type_visas (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE Honoraire_ayments (
  initiale VARCHAR(35) NOT NULL
  );

CREATE TABLE Ville_residence (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE Ville_immigration (
  initiale VARCHAR(35) NOT NULL
  );
  
  
  CREATE TABLE Type_services (
  initiale VARCHAR(35) NOT NULL
  );

