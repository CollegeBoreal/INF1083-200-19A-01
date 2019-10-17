CREATE  DATABASE  vente_telephone;

CREATE  USER ' vente_telephone ' @ ' localhost ' IDENTIFIED BY ' vente_telephone' ;
GRANT ALL ON vente_telephone. * TO ' vente_telephone' @ ' localhost ' ;

use vente_telephone;

CREATE  TABLE  telephones
 (
phone_id INT NOT NULL PRIMERY KEY, marque VARCHAR ( 30 ) NOT NULL
);



CREATE  TABLE  accessoires 
(
accessoir_id INT NOT NULL PRIMERY KEY, chargeurs VARCHAR ( 30 ) NON NUL , prix VARCHAR ( 30 ) NON NUL 
) ;
CREATE TABE payement
(
Nnom VARCHAR(20), prix VARCHAR (20) NOT NULL
) ;
