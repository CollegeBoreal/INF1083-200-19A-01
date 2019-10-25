CREATE DATABASE IF NOT EXISTS Car_Center;


CREATE USER IF NOT EXISTS 'joker'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON Car_Center.* TO 'joker'@'localhost';

 
 
use Car_Center;



CREATE TABLE SERVICES_OFFERED (
  services INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  Sale VARCHAR(30) NOT NULL,
  Insurance VARCHAR(30) NOT NULL,
  Cleaning VARCHAR(30) NOT NULL,
  PRIMARY KEY(services)
  );
  
CREATE TABLE MARKS (
  mark INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  Marks VARCHAR(30) NOT NULL,
  PRIMARY KEY(mark)
  );
  
CREATE TABLE MODELS (
   model INT AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   Models VARCHAR(30) NOT NULL,
   PRIMARY KEY(model)
   );

CREATE TABLE ORIGINS (
   origin INT AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   Origins VARCHAR(30) NOT NULL,
   PRIMARY KEY(origin)
   );
   
CREATE TABLE MARKS_MODELS (
    mark INT,
    model INT,
    PRIMARY KEY(mark, model),
        FOREIGN KEY(mark),
           REFERENCES MARKS(mark),
        FOREIGN KEY(model),
           REFERENCES MODELS(model)
    );
    
CREATE TABLE COLOURS (
   colour INT AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   Colours VARCHAR(30) NOT NULL,
   PRIMARY KEY(colour)
   );
   
CREATE TABLE YEARS (
  year INT  AUTO_INCREMENT,
  name INT NOT NULL,
  Years INT NOT NULL,
  PRIMARY KEY(year)
  );

CREATE TABLE  ENGIN_TYPES (
  engin_type INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  Engins VARCHAR(30) NOT NULL,
  PRIMARY KEY(engin_type)
  );

CREATE TABLE PRICES (
  price INT AUTO_INCREMENT,
  name INT NOT NULL,
  Prices INT NOT NULL,
  PRIMARY KEY(price)
  );

CREATE TABLE MAINTENANCES (
  maintenance INT AUTO_INCREMENTS,
  name VARCHAR(30) NOT NULL,
  Maintenances VARCHAR(30) NOT NULL,
  PRIMARY KEY(maintenance)
  );
  
  
