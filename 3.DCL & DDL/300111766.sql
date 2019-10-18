-- Mon domaine
CREATE DATABASE vente_portable;

-- Mon utilisateur

CREATE USER 'vente_portable'@'localhost' IDENTIFIED BY 'vente_portable_1';
GRANT ALL ON vente_portable.* TO 'vente_portable'@'localhost';

-- selectionner la base de donnees
use vente_portable;

-- Mes Tables

CREATE TABLE telephones(
  Marque VARCHAR(30) NOT NULL
couleur VARCHAR(20) NOT NULL 
  );

CREATE TABLE accessoire (
  Chargeur VARCHAR(30) NOT NULL,
  Ecran VARCHAR(20) NOT NULL
  );
CREATE TABLE prix (
Telephone VARCHAR(30) NOT NULL,
Accessoire VARCHAR(20) NOT NULL
);
