-- mon domaine

use hairasset;

-- Donnees de la table vendeurs

INSERT INTO VENDEURS VALUES ('A007', 'Djumaster', 'Kinshasa', '0.15', '077-25814763', '');
INSERT INTO VENDEURS VALUES ('A003', 'Cheikh', 'Dakar', '0.13', '075-12458969', '');
INSERT INTO VENDEURS VALUES ('A008', 'Halima', 'Rabat', '0.12', '044-25874365', '');
INSERT INTO VENDEURS VALUES ('A011', 'Ravi Kumar', 'Bangalore', '0.15', '077-45625874', '');
INSERT INTO VENDEURS VALUES ('A010', 'Santakumar', 'Chennai', '0.14', '007-22388644', '');

-- Donnees de la table customers

INSERT INTO CUSTOMER VALUES ('C00013', 'Prof', 'Antananarivo', 'Antananarivo', 'MD', '2', '6000.00', '5000.00', '7000.00', '4000.00', 'BBBBBBB', 'A003');
INSERT INTO CUSTOMER VALUES ('C00001', 'Abasse', 'Toronto', 'Toronto', 'CA', '2', '3000.00', '5000.00', '2000.00', '6000.00', 'CCCCCCC', 'A008');
INSERT INTO CUSTOMER VALUES ('C00020', 'Joseph', 'Kinshasa', 'Kinshasa', 'DRC', '3', '5000.00', '7000.00', '6000.00', '6000.00', 'BBBBSBB', 'A008');
INSERT INTO CUSTOMER VALUES ('C00025', 'David', 'Bangalore', 'Bangalore', 'India', '2', '5000.00', '7000.00', '4000.00', '8000.00', 'AVAVAVA', 'A011');
INSERT INTO CUSTOMER VALUES ('C00024', 'Fabrice', 'London', 'London', 'UK', '2', '4000.00', '9000.00', '7000.00', '6000.00', 'FSDDSDF', 'A006');

-- Donnees de la table orders

INSERT INTO ORDERS VALUES('200100', '1000.00', '600.00', '08/01/2008', 'C00013', 'A003', 'SOD');
INSERT INTO ORDERS VALUES('200110', '3000.00', '500.00', '04/15/2008', 'C00019', 'A010', 'SOD');
INSERT INTO ORDERS VALUES('200107', '4500.00', '900.00', '08/30/2008', 'C00007', 'A010', 'SOD');
INSERT INTO ORDERS VALUES('200112', '2000.00', '400.00', '05/30/2008', 'C00016', 'A007', 'SOD'); 
INSERT INTO ORDERS VALUES('200113', '4000.00', '600.00', '06/10/2008', 'C00022', 'A002', 'SOD');
