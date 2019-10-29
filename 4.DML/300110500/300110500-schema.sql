CREATE DATABASE IF NOT EXISTS immigration_consulting;


CREATE USER IF NOT EXISTS 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON immigration_consulting.* TO 'guigma'@'localhost';


use immigration_consulting;


CREATE TABLE Visas (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE Payments (
  initiale VARCHAR(35) NOT NULL
  );

CREATE TABLE Ville_residence (
  initiale VARCHAR(35) NOT NULL
  );
  
  CREATE TABLE Ville_immigration (
  initiale VARCHAR(35) NOT NULL
  );
  
  
  CREATE TABLE Services (
  initiale VARCHAR(35) NOT NULL
  );

