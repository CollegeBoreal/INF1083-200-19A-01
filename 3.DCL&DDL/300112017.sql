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
