-- Dans le domaine

use etudiants;

-- Données de la table étudiants

INSERT INTO ETUDIANTS ( initiale, nom, age ) VALUES ( 'BR', 'Robert', 55);
INSERT INTO ETUDIANTS ( initiale, nom, age ) VALUES ( 'CT', 'Thiam', 33);

-- Données de la table devoirs

INSERT INTO DEVOIRS ( nom, evaluation ) VALUES ( 'Installation Linux', '2019-10-03');
INSERT INTO DEVOIRS ( nom, evaluation ) VALUES ( 'Tout sur Nativescript', '2019-09-03');
INSERT INTO DEVOIRS ( nom, evaluation ) VALUES ( 'Pourquoi Git?', '2019-11-03');
INSERT INTO DEVOIRS ( nom, evaluation ) VALUES ( 'Que faire après le collège?', '2020-04-18');

-- Données de la table notes

INSERT INTO NOTES ( etudiant, devoir, note ) VALUES ( 1, 1, 75);
INSERT INTO NOTES ( etudiant, devoir, note ) VALUES ( 1, 2, 45);
INSERT INTO NOTES ( etudiant, devoir, note ) VALUES ( 2, 1, 85);
INSERT INTO NOTES ( etudiant, devoir, note ) VALUES ( 2, 4, 100);
