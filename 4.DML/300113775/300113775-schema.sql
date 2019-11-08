CREATE DATABASE widesign;




CREATE USER IF NOT EXISTS 'widesign'@'localhost' IDENTIFIED BY 'widesign_1';
GRANT ALL ON widesign.* TO 'widesign'@'localhost';


use widesign;

      
CREATE TABLE IMAGES (
  image INT AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(image)
  );
  
CREATE TABLE USES (
  utilisation INT AUTO_INCREMENT,
  social_networks VARCHAR(50) NOT NULL,
  PRIMARY KEY(utilisation)
  );
  
  
CREATE TABLE SHIPPINGS (
shipp INT AUTO_INCREMENT,
shipping DATE ,
format VARCHAR(8),
PRIMARY KEY(shipp)
);


CREATE TABLE COLORS (
color VARCHAR(10) NOT NULL,
PRIMARY KEY(color)
);

CREATE TABLE DELIVERIES (
   delivery INT AUTO_INCREMENT,
   image INT,
   social_networks VARCHAR(50) NOT NULL,
   PRIMARY KEY(delivery, image),
     FOREIGN KEY(image)
       REFERENCES IMAGES(image)
   );


    

CREATE TABLE PRICES (
  price INT,
  image INT,
  delivery INT,
  PRIMARY KEY(image, delivery),
  FOREIGN KEY(image)
     REFERENCES IMAGES(image),
  FOREIGN KEY(delivery)
     REFERENCES DELIVERIES(delivery)
  );
