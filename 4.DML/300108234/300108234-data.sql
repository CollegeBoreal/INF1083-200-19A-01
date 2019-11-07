-- Dans le domaine

use Hijabfashion;

-- Données de la table couleurs

INSERT INTO COULEURS ( nom ) VALUES ( 'noir');

-- Données de la table prix

INSERT INTO PRIX ( nom, tarif ) VALUES ( 10, 5);

-- Données de la table tailles

INSERT INTO TAILLES ( largeur, longeur, unite_de_mesure ) VALUES ( 55, 160, 'cm');

-- Données de la table accessoires

INSERT INTO ACCESSOIRES ( nom, type ) VALUES ( 'perle','coloree');

-- Données de la table pays de fabrication

INSERT INTO PAYS_DE_FABRICATION ( nom, devise ) VALUES ( 'maroc', 'dirham');

-- Données de la table tissu

INSERT INTO TISSUS ( taille, prix, couleur, accessoire, pays_de_fabrication,
tissu ) VALUES ( 55,160, 'cm', 10,5, 'noir', 'perle', 'coloree', 'maroc', 'Cotton');


