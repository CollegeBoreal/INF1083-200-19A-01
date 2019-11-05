CREATE DATABASE IF NOT EXISTS Car_Center;


CREATE USER IF NOT EXISTS 'joker'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON Car_Center.* TO 'joker'@'localhost';

 
 
use Car_Center;



CREATE TABLE SERVICES_OFFERED (
  service_offered INT AUTO_INCREMENT,
  Sale TEXT NOT NULL,
  PRIMARY KEY(service_offered)
  );
  

CREATE TABLE ORIGINS (
   origin INT AUTO_INCREMENT,
   Origins TEXT NOT NULL,
   PRIMARY KEY(origin)
   );
  
CREATE TABLE  ENGIN_TYPES (
  engin_type INT AUTO_INCREMENT,
  Engins VARCHAR(255) NOT NULL,
  PRIMARY KEY(engin_type)
  );
  
  
CREATE TABLE MARKS (
  mark INT AUTO_INCREMENT,
  origin INT,
  Marks VARCHAR(30) NOT NULL,
  PRIMARY KEY(mark, origin),
    FOREIGN KEY(origin)
      REFERENCES ORIGINS(origin)
  );

   
CREATE TABLE YEARS (
  year INT  AUTO_INCREMENT,
  Years DATE,
  PRIMARY KEY(year)
  );
  
  CREATE TABLE MODELS (
   model INT AUTO_INCREMENT,
   mark INT,
   year INT,
   Models VARCHAR(50) NOT NULL,
   PRIMARY KEY(model, mark),
     FOREIGN KEY(mark)
       REFERENCES MARKS(mark),
     FOREIGN KEY(year)
       REFERENCES YEARS(year)
   );

CREATE TABLE COLOURS (
   colour INT AUTO_INCREMENT,
   Colours VARCHAR(255) NOT NULL,
   model INT,
   PRIMARY KEY(colour, model),
     FOREIGN KEY(model)
       REFERENCES MODELS(model)
   );

CREATE TABLE PRICES (
  price INT,
  model INT,
  PRIMARY KEY(price, model),
  FOREIGN KEY(model)
     REFERENCES MODELS(model)
  );

CREATE TABLE MAINTENANCES (
  maintenance INT AUTO_INCREMENT,
  service_offered INT,
  Maintenances VARCHAR(255) NOT NULL,
  PRIMARY KEY(maintenance),
    FOREIGN KEY(service_offered)
       REFERENCES SERVICES_OFFERED(service_offered)
  );
  
