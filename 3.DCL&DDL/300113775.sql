
CREATE DATABASE widesign;


CREATE USER IF NOT EXISTS 'widesign'@'localhost' IDENTIFIED BY 'widesign_1';
GRANT ALL ON widesign.* TO 'widesign'@'localhost';




use picasa;

CREATE TABLE IMAGES (
  image INT,
  name VARCHAR(30) NOT NULL
 
  );
  
CREATE TABLE USES (
  utilisation VARCHAR(40) NOT NULL ,
  social_networks VARCHAR(50) NOT NULL
  );
  
CREATE TABLE DELIVERIES (
   delivery INT,
   image VARCHAR,
   social_networks VARCHAR(50) NOT NULL
   
   );
   
   
CREATE TABLE COLORS (
  couleurs VARCHAR (30) NOT NULL
);   

CREATE TABLE PRICES (
  price INT NOT NULL,
  image VARCHAR,
  delivery VARCHAR 
  
  );
