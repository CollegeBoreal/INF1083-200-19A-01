
CREATE DATABASE picasa;



--Mon Utilisateur
CREATE USER 'picasa'@'localhost' IDENTIFIED BY 'picasa_1';
GRANT ALL ON picasa.* TO 'picasa'@'localhost';



--Selectionner la base de donnée
use picasa;


--mes tables 
CREATE TABLE MODES (
  nom VARCHAR(15) NOT NULL
  );
  
CREATE TABLE COULEURS (
     nom VARCHAR(10) NOT NULL
     );
     
CREATE TABLE FORMATS (
     nom VARCHAR(5) NOT NULL
     );
  
  
CREATE TABLE RESEAUX_SOCIAUX (
     nom VARCHAR(10) NOT NULL
     );
     
CREATE TABLE FRAMES (
     nom VARCHAR(10) NOT NULL,
     width INT,
     length INT 
     );
     
CREATE TABLE MODES_DE_LIVRAISON (
     nom VARCHAR(20) NOT NULL,
     format INT
     );
     
CREATE TABLE LIVRAISONS (
     nom VARCHAR(15) NOT NULL
     );
     
CREATE TABLE PRIX (
     nom VARCHAR(10) NOT NULL,
     tarif INT 
     );
