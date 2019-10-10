CREATE DATABASE technical_support;

CREATE USER 'technical_support'@'localhost' IDENTIFIED BY 'technical_support_1';
GRANT ALL ON technical_support.* TO 'technical_support'@'localhost';

use technical_support

CREATE TABLE REPAIRS (nom VARCHAR(30) brand VARCHAR(30) NOT NULL);

CREATE TABLE SERVICES (BRAND VARCHAR(30) problem VARCHAR(30) NOT NULL);

CREATE TABLE PAYMENT (nom VARCHAR(30) NOT NULL, note INT);

