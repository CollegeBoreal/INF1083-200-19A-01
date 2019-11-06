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

INSERT INTO MARKS (Marks, origin) VALUES ('Acura', 2);
INSERT INTO MARKS (Marks, origin) VALUES ('JEEP', 3);
INSERT INTO MARKS (Marks, origin) VALUES ('Lamborghini', 1);

INSERT INTO YEARS (Years) VALUES ('2019-02-20');
INSERT INTO YEARS (Years) VALUES ('2019-01-03');
INSERT INTO YEARS (Years) VALUES ('2015-11-09');

INSERT INTO MODELS (Models, mark, year) VALUES ('AVENTADOR', 3, 2);
INSERT INTO MODELS (Models, mark, year) VALUES ('NSX', 1, 3);
INSERT INTO MODELS (Models, mark, year) VALUES ('WRANGLER', 2, 1);

INSERT INTO COLOURS (Colours, model) VALUES ('Black', 1);
INSERT INTO COLOURS (Colours, model) VALUES ('BLUEU', 1);
INSERT INTO COLOURS (Colours, model) VALUES ('GRAY', 1);
INSERT INTO COLOURS (Colours, model) VALUES ('GREEN', 1);
INSERT INTO COLOURS (Colours, model) VALUES ('WHITE', 1);
INSERT INTO COLOURS (Colours, model) VALUES ('Black', 2);
INSERT INTO COLOURS (Colours, model) VALUES ('BLUEU', 2);
INSERT INTO COLOURS (Colours, model) VALUES ('GRAY', 2);
INSERT INTO COLOURS (Colours, model) VALUES ('GREEN', 2);
INSERT INTO COLOURS (Colours, model) VALUES ('WHITE', 2);
INSERT INTO COLOURS (Colours, model) VALUES ('Black', 3);
INSERT INTO COLOURS (Colours, model) VALUES ('BLUEU', 3);
INSERT INTO COLOURS (Colours, model) VALUES ('GRAY', 3);
INSERT INTO COLOURS (Colours, model) VALUES ('GREEN', 3);
INSERT INTO COLOURS (Colours, model) VALUES ('WHITE', 3);

INSERT INTO PRICES (price, model) VALUES (43000, 3);
INSERT INTO PRICES (price, model) VALUES (39000, 2);
INSERT INTO PRICES (price, model) VALUES (1430000, 1);

INSERT INTO MAINTENANCES (Maintenances) VALUES ('Brake');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Repair');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Tires');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Transmission');

