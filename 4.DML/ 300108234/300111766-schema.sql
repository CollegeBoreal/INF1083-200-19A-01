- Mon domaine
CREATE  DATABASE  IF NOT EXISTS vente_portable;

- Mon utilisateur

CREATE  USER  IF NOT EXISTS ' vente_portable' @ ' localhost ' IDENTIFIED BY ' vente_telephone_1 ' ;
GRANT ALL ON etudiants. * TO ' vente_telephone ' @ ' localhost ' ;

- selectionner la base de donnees
utiliser vente_telephone;

- Mes tables

CCREATE TABLE Telephones(
  telephone INT AUTO_INCREMENT,
  marque VARCHAR ( 30 ) NON NULL ,
  couleur VARCHAR ( 30 ) NOT NULL ,
  PRIMARY KEY (telephone)
  ) ;
  
CREATE  TABLE  Accessoires (
  accessoire INT AUTO_INCREMENT,
  chargeur VARCHAR ( 30 ) NOT NULL ,
ecran VARCHAR(30) NOT NU LL,
PRIMARY KEY (accessoire)
  ) ;

CREATE TABLE Prix (
  Telephone INT ,
  accessoire INT ,
  prix INT ,
  PRIMARY KEY (telephone accessoire),
  CLÉ ÉTRANGÈRE (telephone)
     REFERENCES Telephones (telephone),
  CLÉ ÉTRANGÈRE (accessoire)
     RÉFÉRENCES Accessoires (accessoire)
  ) ;
