-- Mon domaine
CREATE DATABSE Car_Center;

-- Mon utilisateur

CREATE USER 'joker'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON joker.* TO 'joker'@'localhost';

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
  int VARCHAR(4) NOT NULL
  );

CREATE TABLE ENGIN_TYPE (
  name VARCHAR(30) NOT NULL
  );

CREATE TABLE PRICE (
  int VARCHAR(8) NOT NULL
  );

CREATE TABLE MAINTENANCE (
  name VARCHAR(30) NOT NULL
  );
  
  
