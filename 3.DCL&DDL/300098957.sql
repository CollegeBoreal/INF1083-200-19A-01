-- Mon domaine
CREATE DATABASE etudiants;

-- Mon utilisateur

CREATE USER 'etudiants'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON etudiants.* TO 'etudiants'@'localhost';

use etudiants;

-- Mes Tables

CREATE TABLE NOTES (
  nom VARCHAR(30) NOT NULL,
  note INT
  );

