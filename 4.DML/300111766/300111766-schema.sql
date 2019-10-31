-- Mon domaine 

CREATE  DATABASE  IF NOT EXISTS vente_portable;

-- Mon utilsateur 

CREATE  USER  IF NOT EXISTS 'thiam' @ ' localhost ' IDENTIFIED BY ' vente_telephone_1 ' ;
GRANT ALL ON vente_portable.* TO 'thiam' @ ' localhost ' ;

-- Selectionner la base de donnees

Use vente_portable;

-- Mes tables

  CREATE TABLE TELEPHONES(
  telephone INT AUTO_INCREMENT,
  marque VARCHAR ( 30 ) NON NULL,
  accessoire VARCHAR ( 30 ) NOT NULL,
  PRIMARY KEY (telephone)
  );
  
  CREATE  TABLE  CUSTOMERS(
  customer INT AUTO_INCREMENT,
  name VARCHAR ( 30 ) NOT NULL,
  address VARCHAR(30) NOT NULL,
  inscription Date,
  PRIMARY KEY (customer)
  );

  CREATE TABLE PRICE (
  telephone INT,
  customer INT,
  price INT,
  PRIMARY KEY (telephone, customer),
  FOREIGN KEY (telephone)
     REFERENCES TELEPHONES (telephone),
  FOREIGN KEY (cutomer)
     REFERENCES COULEURS (customer)
  );
