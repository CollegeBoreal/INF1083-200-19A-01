CREATE DATABASE IF NOT EXISTS Car_Center;


CREATE USER IF NOT EXISTS 'joker'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON Car_Center.* TO 'joker'@'localhost';

 
 
use Car_Center;



CREATE TABLE SERVICES_OFFERED (
  services INT AUTO_INCREMENT,
  Sale VARCHAR(30) NOT NULL,
  PRIMARY KEY(services)
  );
  
CREATE TABLE MARKS (
  mark INT AUTO_INCREMENT,
  Marks VARCHAR(500) NOT NULL,
  PRIMARY KEY(mark)
  );
  
CREATE TABLE MODELS (
   model INT AUTO_INCREMENT,
   mark INT,
   Models VARCHAR(500) NOT NULL,
   PRIMARY KEY(model, mark),
     FOREIGN KEY(mark)
       REFERENCES MARKS(mark)
   );

CREATE TABLE ORIGINS (
   origin INT AUTO_INCREMENT,
   mark INT,
   Origins VARCHAR(255) NOT NULL,
   PRIMARY KEY(origin),
     FOREIGN KEY(mark)
       REFERENCES MARKS(mark)
   );
   
    
CREATE TABLE COLOURS (
   colour INT AUTO_INCREMENT,
   Colours VARCHAR(255) NOT NULL,
   PRIMARY KEY(colour)
   );
   
CREATE TABLE YEARS (
  year INT  AUTO_INCREMENT,
  model INT,
  Years DATE,
  PRIMARY KEY(year, model),
     FOREIGN KEY(model)
        REFERENCES MODELS(model)
  );

CREATE TABLE  ENGIN_TYPES (
  engin_type INT AUTO_INCREMENT,
  Engins VARCHAR(255) NOT NULL,
  PRIMARY KEY(engin_type)
  );

CREATE TABLE PRICES (
  price INT,
  model INT,
  mark INT,
  PRIMARY KEY(model, mark),
  FOREIGN KEY(model)
     REFERENCES MODELS(model),
  FOREIGN KEY(mark)
     REFERENCES MARKS(mark)
  );

CREATE TABLE MAINTENANCES (
  maintenance INT AUTO_INCREMENT,
  Maintenances VARCHAR(255) NOT NULL,
  PRIMARY KEY(maintenance)
  );
  
