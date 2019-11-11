-- Mon domaine
	

CREATE DATABASE IF NOT EXISTS Hijabfashion;
	
-- Mon utilisateur
	

CREATE USER IF NOT EXISTS 'halima'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON Hijabfashion.* TO 'halima'@'localhost';
		

-- Selectionner la base de donnees 


use Hijabfashion;


-- Mes tables
	
	 
CREATE TABLE ADRESSES(
adresse INT AUTO_INCREMENT,
rue VARCHAR(30) NOT NULL,
ville VARCHAR(30) NOT NULL,
code_postal VARCHAR(30) NOT NULL,
PRIMARY KEY (adresse)

);


CREATE TABLE VENTES(
vente INT AUTO_INCREMENT,
commande date,
PRIMARY KEY (vente)

);

CREATE TABLE PRIX(
prix INT AUTO_INCREMENT,
nom VARCHAR(30) NOT NULL,
tarif VARCHAR(30) NOT NULL,
PRIMARY KEY (prix)


);


CREATE TABLE CLIENTS(
adresse INT,
vente INT,
prix INT, 
client INT,
PRIMARY KEY (adresse, vente, prix),
FOREIGN KEY(adresse) 
   REFERENCES ADRESSES(adresse),
FOREIGN KEY(vente) 
   REFERENCES VENTES(vente),
FOREIGN KEY(prix) 
   REFERENCES PRIX(prix)

);



CREATE TABLE COULEURS(
couleur INT AUTO_INCREMENT, 
nom VARCHAR(30) NOT NULL,  
PRIMARY KEY (couleur)

);



CREATE TABLE TAILLES(
taille INT AUTO_INCREMENT,
largeur VARCHAR(30) NOT NULL,	
longeur VARCHAR(30) NOT NULL,
unite_de_mesure VARCHAR(30) NOT NULL,
PRIMARY KEY (taille)
	
);


CREATE TABLE ACCESSOIRES(
accessoire INT AUTO_INCREMENT,  
nom VARCHAR(30) NOT NULL,
type VARCHAR(30) NOT NULL,
PRIMARY KEY (accessoire)

);


CREATE TABLE PAYS_DE_FABRICATION( 
pays_de_fabrication INT AUTO_INCREMENT,  
nom VARCHAR(30) NOT NULL,
devise VARCHAR(30) NOT NULL,
livraison Date,
PRIMARY KEY (pays_de_fabrication)

);


CREATE TABLE TISSUS(
taille INT,
couleur INT,
accessoire INT,
pays_de_fabrication INT,
tissu INT,

PRIMARY KEY ( taille, couleur, accessoire, pays_de_fabrication),
FOREIGN KEY(taille) 
   FEFERENCES TAILLES(taille),
FOREIGN KEY(couleur) 
   REFERENCES COULEURS(couleur),
FOREIGN KEY(accessoire) 
   REFERENCES ACCESSOIRES(accessoire),
FOREIGN KEY(pays_de_fabrication) 
   REFERENCES PAYS_DE_FABRICATION(pays_de_fabrication)

);
