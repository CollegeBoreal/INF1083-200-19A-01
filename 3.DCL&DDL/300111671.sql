-- Mon domaine

CREATE DATABASE Boubou;



-- Mon utilisateur



CREATE USER 'abbas'@'localhost' IDENTIFIED BY 'abbas_1';

GRANT ALL ON abbas.* TO 'abbas'@'localhost';



-- selectionner la base de donnees

use Boubou;



-- Mes Tables



CREATE TABLE PAYS (

  NOM VARCHAR(30) NOT NULL

  );

CREATE TABLE GENRE (

  NOM VARCHAR(30) NOT NULL

  );

CREATE TABLE  MODELE (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE COULEUR (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE DELAI (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE QUANTITE (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE DUREE (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE AGE (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE LOGISTIQUE (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE PRIX (

  name VARCHAR(30) NOT NULL

  );

CREATE TABLE PAIEMENT (

  name VARCHAR(30) NOT NULL

  );




