--Mon domaine

CREATE DATABASE immigration;

-- Mon utilsateu

CREATE USER 'guigma'@'localhost' IDENTIFIED BY 'guigma_1';
GRANT ALL ON etudiants.* TO 'guigma'@'localhost';

-- selectionner la base de donnees
use guigma;

-- Mes Tables

CREATE TABLE  (
  initiale VARCHAR(35) NOT NULL
  );

  
{Visa Etudiant, visa Resident Permanent, visa Resident Temporaire, visa de refugier} => Type de visa[Nom]
{Espece,Cheque, Carte Bancaire, Western Union} =>  Mode de reglement[Nom]
{Ghana, Niger, Congo, Burkina Faso, France} => [Pays de Residence]
Canada, USA, Espagne, France, Allemagne => [Pays d'immigration]
{Appui, conseil, documentation, annulation d'une demande} => [Type de Service]
