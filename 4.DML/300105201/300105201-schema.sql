CREATE DATABASE musicshop;


CREATE USER 'musicshop'@'localhost' IDENTIFIED BY 'musicshop_1';
GRANT ALL ON musicshop.* TO 'musicshop'@'localhost';

use musicshop;


CREATE TABLE SERVICES_OFFERED  (
  service_offered INT NOT NULL,
  Services VARCHAR(30) NOT NULL,
  PRIMARY KEY(service_offered)
  );
  
CREATE TABLE CUSTOMERS  (
  customer INT AUTO_INCREMENT,
  Name VARCHAR(30) NOT NULL,
  Phone_number INT NOT NULL,
  PRIMARY KEY(customer)
  );
  
   CREATE TABLE INSTRUMENTS (
  instrument INT AUTO_INCREMENT,
  Types TEXT NOT NULL,
  Name VARCHAR(30) NOT NULL,
    PRIMARY KEY(instrument)
  );
  
 CREATE TABLE COLOURS (
  colour INT AUTO_INCREMENT,
  Color VARCHAR(30) NOT NULL,
   PRIMARY KEY(colour)
  ); 

CREATE TABLE PRICES (
  price  INT AUTO_INCREMENT,
  instrument INT,
  colour INT,
  PRIMARY KEY(price, instrument),
    FOREIGN KEY(instrument)
      REFERENCES INSTRUMENTS(instrument),
    FOREIGN KEY(colour)
      REFERENCES COLOURS(colour)
  );
