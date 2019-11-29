-- Creation de la base de donnees

CREATE DATABASE IF NOT EXISTS Car_Center;

-- Creation de l'utilisateur

CREATE USER IF NOT EXISTS 'joker'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON Car_Center.* TO 'joker'@'localhost';

-- Se diriger vers la base de donnees 
 
use Car_Center;

-- Creation des tables

CREATE TABLE SERVICES_OFFERED (
  service_offered INT AUTO_INCREMENT,
  Sale TEXT NOT NULL,
  PRIMARY KEY(service_offered)
  );
  

CREATE TABLE ORIGINS (
   origin INT NOT NULL,
   Origins TEXT NOT NULL,
   PRIMARY KEY(origin)
   );
  
CREATE TABLE  ENGIN_TYPES (
  engin_type INT AUTO_INCREMENT,
  Engins VARCHAR(255) NOT NULL,
  PRIMARY KEY(engin_type)
  );
  
  
CREATE TABLE MAKES (
  make INT AUTO_INCREMENT,
  Makes VARCHAR(30) NOT NULL,
  PRIMARY KEY(make)
  );

   
CREATE TABLE YEARS (
  year INT  AUTO_INCREMENT,
  Years DATE,
  PRIMARY KEY(year)
  );
  CREATE TABLE COLOURS (
   colour INT AUTO_INCREMENT,
   Colours VARCHAR(255) NOT NULL,
   PRIMARY KEY(colour)
   );
  
  CREATE TABLE MODELS (
   model INT AUTO_INCREMENT,
   make INT,
   year INT,
   colour INT,
   origin INT,
   Models VARCHAR(50) NOT NULL,
   PRIMARY KEY(model, make),
     FOREIGN KEY(make)
       REFERENCES MAKES(make),
     FOREIGN KEY(year)
       REFERENCES YEARS(year),
     FOREIGN KEY(colour)
       REFERENCES COLOURS(colour),
     FOREIGN KEY(origin)
       REFERENCES ORIGINS(origin)
   );



CREATE TABLE PRICES (
  price INT,
  model INT,
  PRIMARY KEY(price, model),
  FOREIGN KEY(model)
     REFERENCES MODELS(model)
  );

CREATE TABLE CLIENTS(
  client Int AUTO_INCREMENT,
  Name VARCHAR(20),
  FirstName VARCHAR(20),
  PRIMARY KEY(client)
);

CREATE TABLE SALES(
 sale INT AUTO_INCREMENT,
 client INT,
 price INT,
 service_offered INT,
 Receipt TEXT(50),
 DateOfTransaction DATE NOT NULL DEFAULT '2019-11-29',
 NumberOfTransaction INT NOT NULL DEFAULT 30098756,
 PRIMARY KEY(sale), 
   FOREIGN KEY(client)
      REFERENCES CLIENTS(client),
   FOREIGN KEY(price)
      REFERENCES PRICES(price),
   FOREIGN KEY(service_offered)
      REFERENCES SERVICES_OFFERED(service_offered)
);

CREATE TABLE MAINTENANCES (
  maintenance INT AUTO_INCREMENT,
  service_offered INT,
  Maintenances VARCHAR(255) NOT NULL,
  PRIMARY KEY(maintenance),
    FOREIGN KEY(service_offered)
       REFERENCES SERVICES_OFFERED(service_offered)
  );
  
-- Author: <Etienne>
