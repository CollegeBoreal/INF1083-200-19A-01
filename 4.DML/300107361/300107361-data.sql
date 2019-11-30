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

INSERT INTO MAKES (origin, Makes) VALUES (2, 'Acura');
INSERT INTO MAKES (origin, Makes) VALUES (3, 'JEEP');
INSERT INTO MAKES (origin, Makes) VALUES (1, 'Lamborghini');

INSERT INTO YEARS (Years) VALUES ('2019-02-20');
INSERT INTO YEARS (Years) VALUES ('2019-01-03');
INSERT INTO YEARS (Years) VALUES ('2019-11-09');

INSERT INTO COLOURS (Colours) VALUES ('Black');
INSERT INTO COLOURS (Colours) VALUES ('BLUEU');
INSERT INTO COLOURS (Colours) VALUES ('GRAY');
INSERT INTO COLOURS (Colours) VALUES ('GREEN');
INSERT INTO COLOURS (Colours) VALUES ('WHITE');

INSERT INTO PRICES (Prices) VALUES (43000);
INSERT INTO PRICES (Prices) VALUES (39000);
INSERT INTO PRICES (Prices) VALUES (1430000);

INSERT INTO MODELS (make, year, colour, price, Models) VALUES (1, 1, 1, 2, 'NSX');
INSERT INTO MODELS (make, year, colour, price, Models) VALUES (2, 2, 1, 1, 'WRANGLER');
INSERT INTO MODELS (make, year, colour, price, Models) VALUES (3, 3, 4, 3, 'AVENTADOR');

INSERT INTO CUSTOMERS (Name, FirstName) VALUES ('Etienne', 'Joky');

INSERT INTO PAYMENTS (customer, price) VALUES (1, 1);
INSERT INTO PAYMENTS (customer, price) VALUES (1, 2);

INSERT INTO MAINTENANCES (Maintenances) VALUES ('Brake');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Repair');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Tires');
INSERT INTO MAINTENANCES (Maintenances) VALUES ('Transmission');

-- Author: <Etienne>
