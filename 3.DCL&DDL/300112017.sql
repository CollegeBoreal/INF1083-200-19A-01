-- Mon domaine
                                CREATE DATABASE magasin;

-- Mon utilisateur


CREATE USER 'magasin'@'localhost' IDENTIFIED BY 'etudiants_1';
GRANT ALL ON magasin.* TO 'magasin'@'localhost';

-- selectionner la base de donnees
use magasin;


-- Mes Tables
CREATE TABLE clients(
 num_client INT NOT NULL,
     nom VARCHAR(30),
    prenom VARCHAR(20)
    );
CREATE TABLE marchandises(
       num_marchandise INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
       nom_marchandise VARCHAR(20),
       prix_marchandise INT(20) NOT NULL,
       description_marchandise TEXT
      );
CREATE TABLE PAYMENTS(
          nom VARCHAR(30) NOT NULL, 
          note INT
);
CREATE TABLE Couleurs(
          nom VARCHAR(30) NOT NULL, 
          note INT
);
CREATE TABLE Marques(
          nom VARCHAR(30) NOT NULL, 
          note INT
 );
