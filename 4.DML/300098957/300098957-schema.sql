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
  programme INT,
  age INT,
  PRIMARY KEY(etudiant),
  FOREIGN KEY(programme) 
     REFERENCES PROGRAMMES(programme)
  );
  
CREATE TABLE DEVOIRS (
  devoir INT AUTO_INCREMENT,
  nom VARCHAR(30) NOT NULL,
  evaluation Date,
  PRIMARY KEY(devoir)
  );

CREATE TABLE NOTES (
  etudiant INT,
  devoir INT,
  note INT,
  PRIMARY KEY( etudiant, devoir),
  FOREIGN KEY(etudiant) 
     REFERENCES ETUDIANTS(etudiant),
  FOREIGN KEY(devoir) 
     REFERENCES DEVOIRS(devoir)
  );
  
  -- A vous de jouer
  
  
CREATE TABLE PROGRAMMES (
  programme INT AUTO_INCREMENT,
  nom VARCHAR(30) NOT NULL,
  nombre_annee INT,
  PRIMARY KEY(programme)
);

