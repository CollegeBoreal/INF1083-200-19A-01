-- Mon domaine
CREATE DATABASE etudiants;

-- Mon utilisateur

CREATE USER 'etudiants'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON etudiants.* TO 'etudiants'@'localhost';

-- selectionner la base de donnees
use etudiants;

-- Mes Tables

CREATE TABLE ETUDIANTS (
  initiale VARCHAR(30) NOT NULL
  );

CREATE TABLE NOTES (
  nom VARCHAR(30) NOT NULL,
  note INT
  );
  
  -- A vous de jouer

