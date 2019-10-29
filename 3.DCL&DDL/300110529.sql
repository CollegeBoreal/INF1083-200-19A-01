-- Mon domaine

CREATE DATABASE Carte_graphique;

-- Mon utilisateur

CREATE USER 'Carte_graphique'@'localhost' IDENTIFIED BY 'Carte_graphique';
GRANT ALL ON Carte_graphique.* TO 'Carte_graphique'@'localhost';


-- selectionner la base de donnees

use Carte_graphique;


-- Mes Tables
	 CREATE TABLE clients(
num_client INT NOT NULL,
	     nom VARCHAR(30),
	    prenom VARCHAR(20)
	    );
	CREATE TABLE marchandises(
	       num_marchandise INT NOT NULL,
	       nom_marchandise VARCHAR(20),
	       prix_marchandise INT(20) NOT NULL,
	       description_marchandise TEXT
	      );
	CREATE TABLE PAYMENTS(
	          nom VARCHAR(30) NOT NULL, 
	          note INT
	);
	CREATE TABLE Capacites(
	          nom VARCHAR(30) NOT NULL, 
	          note INT
	);
	CREATE TABLE Modeles(
	          nom VARCHAR(30) NOT NULL, 
	          note INT
	 ); 
