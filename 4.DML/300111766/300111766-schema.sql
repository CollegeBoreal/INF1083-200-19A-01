-- Mon domaine 
 

CREATE  DATABASE  IF NOT EXISTS vente_portable;
	

-- Mon utilsateur 
	

CREATE  USER  IF NOT EXISTS 'thiam'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON vente_portable.* TO 'thiam'@'localhost' ;
	
-- Use vente_portable;
	

--Mes tables

	
CREATE TABBLE MARKS (
   mark INT AUTO_INCREMENT,
   marks VARCHAR(30) NOT NULL,
   PRIMARY KEY(mark)	  
   );
   

CREATE TABLE MODELS (
   model INT AUTO_INCREMENT,
   models VARCHAR(30) NOT NULL,
   );


CREATE TABLE PRICES (
  price INT,
  model INT,
  prices VARCHAR(30) NOT NULL,
  PRIMARY KEY(model, price)
  FOREIGN KEY(model),
  REFERENCES MODELS(model),
  );
  
  
CREATE TABLE CUSTOMERS (
  customer AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  address VARCHAR (25) NOT NULL,
  date of barth(25) NOT NULL,
  );
  
	
CREATE TABLE INVOICES (
  mark INT,
  customer INT,
  invoice INT,
  PRIMARY KEY(mark,customer),
  FOREIGN KEY(mark)
  REFERENCES MARKS(mark)	
  FOREIGN KEY(customer)
  REFERENCES CUSTOMERS(customer)
 );
 



 






 

 



 






 

 



 






 
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
  
