-- Mon domaine

CREATE DATABASE Carte_graphique;

-- Mon utilisateur

CREATE USER 'Carte_graphique'@'localhost' IDENTIFIED BY 'Carte_graphique';
GRANT ALL ON Carte_graphique.* TO 'Carte_graphique'@'localhost';


-- selectionner la base de donnees

use Carte_graphique;


-- Mes Tables


CREATE TABLE Marques (

  NAME VARCHAR(30) NOT NULL,
  Marques INT

  );


CREATE TABLE CAPACITE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE  MODELE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE COULEUR (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE DELAI (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE QUANTITE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE DUREE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE ANNEE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE GARANTIE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE PRIX (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE PAIEMENT (

  NAME VARCHAR(30) NOT NULL

  );







