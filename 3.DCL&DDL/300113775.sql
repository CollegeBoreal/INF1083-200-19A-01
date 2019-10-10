-- Mon Domaine
CREATE DATABASA Picasa;



--Mon Utilisateur
CREATE USER 'Picasa'@'localhost' IDENTIFIED BY 'Picasa_1';
GRANT ALL ON Picasa.* TO 'Picasa'@'localhost';



--Selectionner la base de donnée
use Picasa;


--mes tables 
CREATE TABLE MODES (
  initiale VARCHAR(15) NOT NULL
  );
  
 CREATE TABLE COULEURS (
     initiale VARCHAR(10) NOT NULL
     );
     
 CREATE TABLE FORMATS (
     initiale VARCHAR(5) NOT NULL
     );
  
  
 CREATE TABLE SOCIAL MEDIAS (
     initiale VARCHAR(10) NOT NULL
     );
     
   CREATE TABLE FRAMES (
     initiale VARCHAR(10) NOT NULL
     );
