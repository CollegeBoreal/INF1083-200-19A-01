# INF1006-202-19A-01
Système de gestion de bases de données

## Devoirs:

| Date   |                                                     |     Commentaires                                                      |
|:------:|:----------------------------------------------------|:----------------------------------------------------------------------|
|05-09-19| [3NF](./0.3NF)                                      | * Domaine, * 1NF, * 2NF, * 3NF                                        |
|12-09-19| [Modele](./1.Modele)                                | Presenter l'ebauche du model sous MySQL Workbench, fichier _*.mwb_    |
|19-09-19| [DML](./2.DML/PRATIQUE.md#exercice)                 | Exercices de requetes sur Sakila (Paiements)                          |
|26-09-19| [DML](./2.DML/PRATIQUE.md#perfectionnement)         | Exercices de requetes sur Sakila (Films)                              |
|03-10-19| [E2E](./3.E2E)                                      | Exercices de requetes sur World (pays)                                |



## Resultats d'Apprentissage du Cours

|No|L'etudiant(e) aura demontre, de facon fiable, sa capacite a:      |          Elements de performance                               |
|--|------------------------------------------------------------------|:---------------------------------------------------------------|
| 1| Créer et gérer, à l’aide d’un logiciel basé sur du texte, une base de données relationnelle en fonction des besoins particuliers d’une situation donnée                                                | * Créer une base de données en fonction de la commande reçue
|  |                                                                  | * Créer des tables dans une base de données existante
|  |                                                                  | * Maintenir des données (p. ex., ajouter, supprimer et modifier des records dans une table) |
|  |                                                                  | * Créer une copie de sauvegarde (backup) d’une base de données |
|  |                                                                  | * Créer une requête appropriée en fonction du contexte donné   |
|  |                                                                  | * Créer une sous-requête en fonction du contexte donné         |
|  |                                                                  | * Créer une vue appropriée en fonction du contexte donné       |
|  |                                                                  | * Définir les relations entre des tables                       |

## Elements de Performance

|No| Date   | Cours                       | Intitulé              |  Pratique .                                                    |
|--|--------|:----------------------------|:----------------------|:---------------------------------------------------------------|
| 1|05-09-19|                             | Rentree des classes   |                                                                |
| 3|02-10-19| [DML](./2.DML#exercices)    | DML                   | function, alias                                                |
|  |        |                             |                       | groupement, condition (having), ordonnacement                  |
|  |        |                             |                       | imbrication (SELECT)                                           |
|  |        |                             |                       | JOIN, alias, inner join (ANSI-Style, Theta), Cartesian Product |


## References

https://books.goalkicker.com/MySQLBook/ (free books)

http://sql.sh/ressources/cours-sql-sh-.pdf (En francais)

http://www.sqltutorial.org/wp-content/uploads/2016/04/SQL-cheat-sheet.pdf

### Docker

https://hub.docker.com/_/mysql/

* Créer le conteneur

```
$ docker run --name some-mysql --env MYSQL_ROOT_PASSWORD=password --publish 33060:3306 --detach mysql:latest
```

* Accéder au conteneur

```
$ docker exec --interactive --tty some-mysql bash
```


### SGBD:

. lancer le CLI (Command Level Interface) de MySQL

```
#  mysql --user root --password
```


. Dans le CLI

.. créer une base de données

```
mysql> CREATE DATABASE etudiants;
```

.. créer les utilisateurs

- Version Longue

```
mysql> CREATE USER 'etudiants'@'localhost' IDENTIFIED BY 'etudiants_1';
mysql> GRANT ALL ON etudiants.* TO 'etudiants'@'localhost';
```
