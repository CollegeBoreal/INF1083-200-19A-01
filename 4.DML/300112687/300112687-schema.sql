-- MON de Domaine


CREATE DATABASE Assurance;

-- Mon  Utilisateur


 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 
 
 use Assurance 
 
 -- Mes Tables

   CREATE TABLE CLIENTS(
  abonnement INT,
  paiement INT,
  vente INT,
  prix INT,
  service INT,
  adresse INT,
 client INT,
PRIMARY KEY (abonnement,paiement,vente,prix,service,adresse),
 FOREIGN KEY (abonnement)
   REFERENCES Abonnement (abonnement),
FOREIGN KEY(paiement)
    REFERENCES PAIEMENT(paiement),
FOREIGN KEY (vente)
    REFERENCES VENTES (vente),  
FOREIGN KEY (prix)
    REFERENCES PRIX (prix), 
FOREIGN KEY (service)
    REFERENCES SERVICES (service),
FOREIGN KEY (adresse)
   REFERENCES ADRESSES (adresse),
    
 );
 
 
 CREATE TABLE ABONNEMENT (
 nom  VARCHAR(30) NOT NULL,
 abonnement VARCHAR(30) NOT NULL,
 PRIMARY KEY (abonnement)

 );
 
 
 CREATE TABLE PAIEMENT(
  nom  VARCHAR(40) NOT NULL,
  paiement VARCHAR(40) NOT NULL,
   mois INT,
  PRIMARY KEY (paiement)

 );
 
 CREATE TABLE SERVICES(
  Incendie VARCHAR(20) NOT NULL,
  voyage VARCHAR(20) NOT NULL,
  voiture VARCHAR(30) NOT NULL,
  PRIMARY KEY (service)

 );
 
 CREATE TABLE PRIX (
 prix  INT AUTO_INCREMENT,
 nom VARCHAR(30) NOT NULL,
 PRIMARY KEY (prix)

 );

CREATE TABLE VENTES(
vente INT AUTO_INCREMENT,
Abonnement VARCHAR(30) NOT NULL,
PRIMARY KEY (vente)

);

CREATE TABLE ADRESSES(
 adresse INT AUTO_INCREMENT,
rue VARCHAR(30) NOT NULL,
ville VARCHAR(30) NOT NULL,
pays VARCHAR(30) NOT NULL,
code_postal VARCHAR(30) NOT NULL,
PRIMARY KEY (adresse)

 
);
