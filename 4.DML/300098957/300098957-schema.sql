-- Mon domaine
CREATE DATABASE IF NOT EXISTS etudiants;

-- Mon utilisateur

CREATE USER IF NOT EXISTS 'etudiants'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON etudiants.* TO 'etudiants'@'localhost';

-- selectionner la base de donnees
use etudiants;

-- Mes Tables

CREATE TABLE ETUDIANTS (
  etudiant INT AUTO_INCREMENT,
  initiale VARCHAR(30) NOT NULL,
  nom VARCHAR(30) NOT NULL,
  age INT,
  PRIMARY KEY(etudiant)
  );

CREATE TABLE NOTES (
  nom VARCHAR(30) NOT NULL,
  note INT
  );
  
  -- A vous de jouer

