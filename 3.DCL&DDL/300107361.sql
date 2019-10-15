-- Mon domaine
CREATE DATABASE Car_Center;

-- Mon utilisateur

CREATE USER 'joker'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON Car_Center.* TO 'joker'@'localhost';

--selectionner la base de donnees 
 
use Car_center

-- Mes Tables

CREATE TABLE SERVICES_OFFERED (
  name VARCHAR(30) NOT NULL
  );
  
CREATE TABLE MARK (
  name VARCHAR(30) NOT NULL
  );
  
CREATE TABLE MODEL (
   name VARCHAR(30) NOT NULL
   );
   
CREATE TABLE ORIGIN (
    name VARCHAR(30) NOT NULL
    );
    
CREATE TABLE COLOUR (
   name VARCHAR(30) NOT NULL
   );
   
CREATE TABLE YEARS (
  name INT NOT NULL
  );

CREATE TABLE ENGIN_TYPE (
  name VARCHAR(30) NOT NULL
  );

CREATE TABLE PRICE (
  name INT NOT NULL
  );

CREATE TABLE MAINTENANCE (
  name VARCHAR(30) NOT NULL
  );
  
  
