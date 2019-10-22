-- Mon domaine

CREATE DATABASE Boubou;



-- Mon utilisateur



CREATE USER 'Boubou'@'localhost' IDENTIFIED BY 'Boubou_1';

GRANT ALL ON Boubou.* TO 'Boubou'@'localhost';



-- selectionner la base de donnees

use Boubou;



-- Mes Tables



CREATE TABLE PAYS (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE GENRE (

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

CREATE TABLE AGE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE LOGISTIQUE (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE PRIX (

  NAME VARCHAR(30) NOT NULL

  );

CREATE TABLE PAIEMENT (

  NAME VARCHAR(30) NOT NULL

  );
