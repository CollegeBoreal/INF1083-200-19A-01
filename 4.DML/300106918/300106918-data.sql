
-- Dans le domaine

use network_IT;

-- Données de la table SOLUTIONS

INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (10, 'maintenance');
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (23, 'configuration');
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (30, 'vlan');
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (51, 'routeur');

-- Données de la table product

INSERT INTO PRODUCTS ( nom, Date ) VALUES ('routers', '2019-10-03');
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('switches', '2019-10-03');
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('camera', '2019-10-03');
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('cables', '2019-10-03');


-- Données de la table insttalation

INSERT INTO INSTTALATIONS (installation, nom ) VALUES (1, 'firewall');
INSERT INTO INSTTALATIONS (installation, nom ) VALUES (2, 'anti-virus');
INSERT INTO INSTTALATIONS (installation, nom ) VALUES (3, 'mise a jours');
                                                  
  -- Données de la table prix
INSERT INTO PRIX (solution, installation,prix ) VALUES (100, 2000, 1500);
