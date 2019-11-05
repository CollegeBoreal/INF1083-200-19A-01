-- Mon domaine 

CREATE  DATABASE  IF NOT EXISTS vente_portable;

-- Mon utilsateur 

CREATE  USER  IF NOT EXISTS 'thiam'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON vente_portable.* TO 'thiam'@'localhost' ;

-- Selectionner la base de donnees

Use vente_portable;

-- Mes tables
	CREATE  DATABASE  IF NOT EXISTS vente_portable;
	

	-- Mon utilsateur 
	

	CREATE  USER  IF NOT EXISTS 'thiam'@'localhost' IDENTIFIED BY 'password';
	GRANT ALL ON vente_portable.* TO 'thiam'@'localhost' ;
	

	-- Selectionner la base de donnees
	

	Use vente_portable;
	

	-- Mes tables
	

	CREATE TABLE MARKS (
	  mark INT AUTO_INCREMENT,
	  marks VARCHAR (30) NOT NULL,
	
	  PRIMARY KEY (mark)
	  );


 CREATE TABLE MODELS (
   model INT AUTO_INCREMENT,
   mark INT,
   models VARCHAR(30) NOT NULL,
   PRIMARY KEY(model, mark),
      FOREIGN KEY(mark),
         REFERNCES MARKS(mark),
   );


 CREATE TABLE PRICES (
  price INT,
  model INT,
  mark INT,
  PRIMARY KEY(model, mark),
  FOREIGN KEY(model),
     REFERENCES MODELS(model),
  );
  
  
CREATE TABLE INVOICES (
  Invoice INT AUTO_INCREMENT,
  Mark INT,
  Invoice_Date,
PRIMARY KEY(invoice, mark),
  FOREINGN KEY(mark)
    REFERENCES MARKS(mark)
);
 



 






 
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
  
