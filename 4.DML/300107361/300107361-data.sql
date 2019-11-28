-- Dans le domaine

use Car_Center;

-- Données des tables

INSERT INTO SERVICES_OFFERED (Sale) VALUES ('Sport_Car');
INSERT INTO SERVICES_OFFERED (Sale) VALUES ('SUV');
INSERT INTO SERVICES_OFFERED (Sale) VALUES ('Truck');

INSERT INTO ORIGINS (origin, Origins) VALUES (1, 'ITALY');
INSERT INTO ORIGINS (origin, Origins) VALUES (2, 'JAPAN');
INSERT INTO ORIGINS (origin, Origins) VALUES (3, 'USA');

INSERT INTO ENGIN_TYPES (Engins) VALUES ('Electric');
INSERT INTO ENGIN_TYPES (Engins) VALUES ('Hybrid');
INSERT INTO ENGIN_TYPES (Engins) VALUES ('Petrol');

INSERT INTO MAKES (Makes) VALUES ('Acura');
INSERT INTO MAKES (Makes) VALUES ('JEEP');
INSERT INTO MAKES (Makes) VALUES ('Lamborghini');

INSERT INTO YEARS (Years) VALUES ('2019-02-20');
INSERT INTO YEARS (Years) VALUES ('2019-01-03');
INSERT INTO YEARS (Years) VALUES ('2015-11-09');

INSERT INTO COLOURS (Colours) VALUES ('Black');
INSERT INTO COLOURS (Colours) VALUES ('BLUEU');
INSERT INTO COLOURS (Colours) VALUES ('GRAY');
INSERT INTO COLOURS (Colours) VALUES ('GREEN');
INSERT INTO COLOURS (Colours) VALUES ('WHITE');

INSERT INTO MODELS (model, Models, make, year, origin, colour) VALUES (1, 'AVENTADOR', 3, 2, 1);
INSERT INTO MODELS (model, Models, make, year, origin, colour) VALUES (2, 'NSX', 1, 3, 2);
INSERT INTO MODELS (model, Models, make, year, origin, colour) VALUES (3, 'WRANGLER', 2, 1, 3);

INSERT INTO PRICES (price, model) VALUES (43000, 3);
INSERT INTO PRICES (price, model) VALUES (39000, 2);
INSERT INTO PRICES (price, model) VALUES (1430000, 1);

INSERT INTO MAINTENANCES (Maintenances) VALUES ('Brake');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Repair');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Tires');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Transmission');

