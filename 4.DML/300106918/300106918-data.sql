
-- Dans le domaine

use network_IT;

-- Données de la table SOLUTIONS

INSERT INTO SOLUTIONS ( solution, nom  ) VALUES ( 'maintenance' , 55);
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES ( 'configuration', 15);
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES ('vlan' , 75);
INSERT INTO SOLUTIONS ( solution, nom  ) VALUES ('routeur', 100);

-- Données de la table product

INSERT INTO PRODUCTS ( nom, Date ) VALUES ('routers');
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('switches');
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('camera' );
INSERT INTO PRODUCTS ( nom, Date ) VALUES ('cables' );


-- Données de la table insttalation

INSERT INTO INSTTALATIONS (nom ) VALUES ('firewall');
INSERT INTO INSTTALATIONS (nom ) VALUES ('anti-virus');
INSERT INTO INSTTALATIONS (nom ) VALUES ('mise a jours');
                                                  
  -- Données de la table prix
INSERT INTO PRIX (solution, installation,prix ) VALUES ('100, 2000, 1500,');
