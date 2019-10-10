-- Mon Domaine
CREATE DATABASE Picasa;



--Mon Utilisateur
CREATE USER 'Picasa'@'localhost' IDENTIFIED BY 'Picasa_1';
GRANT ALL ON Picasa.* TO 'Picasa'@'localhost';



--Selectionner la base de donnée
use Picasa;


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
  
  
CREATE TABLE SOCIAL_MEDIAS (
     nom VARCHAR(10) NOT NULL
     );
     
CREATE TABLE FRAMES (
     nom VARCHAR(10) NOT NULL,
     width INT,
     length INT 
     );
     
CREATE TABLE MODES_DE_LIVRAISON (
     nom VARCHAR(20) NOT NULL,
     format
     );
     
CREATE TABLE LIVRAISONS (
     nom VARCHAR(15) NOT NULL
     );
     
CREATE TABLE PRIX (
     nom VARCHAR(10) NOT NULL,
     tarif INT 
     );
