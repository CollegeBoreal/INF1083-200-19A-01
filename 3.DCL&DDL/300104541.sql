--Mon domaine

CREATE DATABASE Jeux videos 

--Mon User

CREATE USER 'Romeo'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON Romeo.* TO 'Romeo'@'localhost';

--selectionner la base de donnees 


use Jeux videos;


--Mes tables


CREATE TABLE Jeux (
  
nom VARCHAR (4) NOT NULL,
categorie VARCHAR (4) NOT NULL,
Jeux INT 
  
);



CREATE TABLE Support (
  
nom VARCHAR (2) NOT NULL,
Support INT 
  
);



CREATE TABLE Console (
  
nom VARCHAR (4) NOT NULL, 
Support INT 
  
);



CREATE DATABASE Vente Virtuelle
nom VARCHAR (2) NOT NULL,
Vente Virtuelle INT

);



CREATE DATABASE Vente Physique 
nom VARCHAR (3) NOT NULL,
Vente Physique INT 

);



CREATE DATABASE Diffusion
nom VARCHAR (2) NOT NULL,
Diffusion INT

);
