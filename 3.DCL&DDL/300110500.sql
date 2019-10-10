--Mon domaine

CREATE DATABASE immigration;

-- Mon utilsateu

CREATE USER 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON etudiants.* TO 'guigma'@'localhost';

-- selectionner la base de donnees
use guigma;

-- Mes Tables

CREATE TABLE IMMIGRATION (
  initiale VARCHAR(35) NOT NULL
  );

  
