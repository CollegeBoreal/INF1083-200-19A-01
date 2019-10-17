-- Mon domaine
CREATE DATABASE hairasset;

-- Mon utilisateur

CREATE USER 'hairasset'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON hairasset.* TO 'hairasset'@'localhost';

-- selectionner la base de donnees
use hairasset;

-- Mes Tables

CREATE TABLE CUSTOMERS (
  initiale VARCHAR(30) NOT NULL
  );

CREATE TABLE COLOR (
  initiale VARCHAR(30) NOT NULL
  );

CREATE TABLE PRICE (
  initiale VARCHAR(30) NOT NULL
  );

CREATE TABLE TYPE (
  initiale VARCHAR(30) NOT NULL
  );

CREATE TABLE NOTES (
  nom VARCHAR(30) NOT NULL,
  note INT
  );
