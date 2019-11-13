-- MON de Domaine


CREATE DATABASE Assurance;

-- Mon  Utilisateur


 CREATE USER 'Assurance'@'localhost' IDENTIFIED BY 'Assurance_1';
 
 GRANT ALL ON Assurance.* TO 'Assurrance'@'localhost';
 
 -- Selectionne la base de donnees
 
 
 use Assurance 
 
 -- Mes Tables

  
 CREATE TABLE CLIENTS(

 adresse INT,
vente INT,
prix INT,
client INT,
abonnement INT,
service INT,
PRIMARY KEY (abonnement,paiement, vente , prix,service,adresse),
 FOREIGN KEY (abonnement)
   REFERENCES Abonnement (abonnement),
  
  FOREIGN KEY(paiement)
    REFERENCES PAIEMENT(paiement),
  
  FOREIGN KEY (vente)
    REFERENCES VENTES (vente), 
  
  FOREIGN KEY(prix)
    REFERENCES PRIX (prix),
  
FOREIGN KEY (service)
    REFERENCES SERVICES (service),
  
  FOREIGN (adresse),
   REFERENCES ADRESSES (adresse),


 );
 
 
 CREATE TABLE ABONNEMENT (
 nom  du client VARCHAR (30) NOT NULL
 Mois INT,
type d’abonnement VARCHAR(30) NOT NULL,
PRIMARY KEY (abonnement)

 );
 
 
 CREATE TABLE PAIEMENT(
 nom du client  VARCHAR (40) NOT NULL,
 type de paiement VARCHAR (40) NOT NULL,
  mois INt,
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
nom VARCHAR (30) NOT NULL,
PRIMARY KEY (prix)

 );

CREATE TABLE VENTES(

vente INT AUTO_INCREMENT,
Abonnement VARCHAR(30) NOT NULL;
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
