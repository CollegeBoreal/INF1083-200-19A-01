-- Mon domaine

CREATE DATABASE immigration_consulting;

-- Mon utilsateur

CREATE USER 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON immigration.* TO 'guigma'@'localhost';

-- selectionner la base de donnees

use immigration_consulting;

-- Mes Tables

CREATE TABLE TYPE_VISAS (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE HONORAIRE_PAYMENTS (
  initiale VARCHAR(35) NOT NULL
  );

CREATE TABLE VILLE_RESIDENCE (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE VILLE_IMMIGRATION (
  initiale VARCHAR(35) NOT NULL
  );
  
  
  CREATE TABLE TYPE_SERVICES (
  initiale VARCHAR(35) NOT NULL
  );

