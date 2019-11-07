-- Dans le domaine

use Hijabfashion;

-- Données de la table couleurs

INSERT INTO COULEURS ( nom ) VALUES ( 'noir');
INSERT INTO COULEURS ( nom ) VALUES ( 'pale');
INSERT INTO COULEURS ( nom ) VALUES ( 'bleu');

-- Données de la table prix

INSERT INTO PRIX ( nom, tarif ) VALUES ( 10, 5);
INSERT INTO PRIX ( nom, tarif ) VALUES ( 15, 5);
INSERT INTO PRIX ( nom, tarif ) VALUES ( 20, 5);

-- Données de la table tailles

INSERT INTO TAILLES ( largeur, longeur, unite_de_mesure ) VALUES ( 55, 140, 'cm');
INSERT INTO TAILLES ( largeur, longeur, unite_de_mesure ) VALUES ( 60, 160, 'cm');
INSERT INTO TAILLES ( largeur, longeur, unite_de_mesure ) VALUES ( 65, 180, 'cm');

-- Données de la table accessoires

INSERT INTO ACCESSOIRES ( nom, type ) VALUES ( 'perle','coloree');
INSERT INTO ACCESSOIRES ( nom, type ) VALUES ( 'Motif','broderie');

-- Données de la table pays de fabrication

INSERT INTO PAYS_DE_FABRICATION ( nom, devise, livraison ) VALUES ( 'maroc', 'dirham', '2019-11-15');
INSERT INTO PAYS_DE_FABRICATION ( nom, devise, livraison ) VALUES ( 'yemen', 'riyal', '2019-11-30');
INSERT INTO PAYS_DE_FABRICATION ( nom, devise, livraison ) VALUES ( 'arabie saoudite', 'riyal', '2019-12-30');

-- Données de la table tissus

INSERT INTO TISSUS ( taille, prix, couleur, accessoire, pays_de_fabrication, tissu) VALUES ( 1, 2, 1, 1, 3, coton);
INSERT INTO TISSUS ( taille, prix, couleur, accessoire, pays_de_fabrication, tissu) VALUES ( 3, 3, 3, 1, 2, laine);
INSERT INTO TISSUS ( taille, prix, couleur, accessoire, pays_de_fabrication, tissu) VALUES ( 2, 1, 2, 2, 1, soie);

-- Données de la table adresses

INSERT INTO ADRESSES ( rue, ville, pays, code_postal ) VALUES ( '1765 victoria park drive', 'toronto', 'canada', 'm1s3r4');
INSERT INTO ADRESSES ( rue, ville, pays, code_postal ) VALUES ( '89 amal', 'oran', 'algerie', 2456);
INSERT INTO ADRESSES ( rue, ville, pays, code_postal ) VALUES ( '1254 river street', 'chicago', 'usa', 's4r1m2');

-- Données de la table clients

INSERT INTO CLIENTS ( adresse, client ) VALUES ( 1, 'aya samar');
INSERT INTO CLIENTS ( adresse, client ) VALUES ( 3, 'nada ashkar');
INSERT INTO CLIENTS ( adresse, client ) VALUES ( 2, 'maria amr');
