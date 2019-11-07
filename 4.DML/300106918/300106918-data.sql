
-- Dans le domaine

use network_IT;

-- Données de la table SOLUTIONS

INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (14, 'maintenance');
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (22, 'configuration');
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (34, 'vlan');
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES (56, 'routeur');

-- Données de la table product

INSERT INTO PRODUCTS ( nom, Date ) VALUES ('router', 2020-11-09);
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('switches', 2014-10-04);
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('camera', 2014-10-01);
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('cables', 2014-10-07);


-- Données de la table insttalation

INSERT INTO INSTALLATIONS (installation, nom ) VALUES (4, 'firewall');
INSERT INTO INSTALLATIONS (installation, nom ) VALUES (5, 'anti-virus');
INSERT INTO INSTALLATIONS (installation, nom ) VALUES (6, 'mise a jours');
                                                  
  -- Données de la table prix
INSERT INTO PRIX (solution, installation, prix ) VALUES (22, 4, 1000);
