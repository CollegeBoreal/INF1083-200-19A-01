# DML

*** Taches ***

:bookmark: Écrire un fichier de commande SQL permettant de créer votre domain dans un base de données MySQL

:warning: 
   
   :one: Créer un fichier avec votre :id: et nommer le :id:`.sql` en copiant le contenu de DCL&DDL
   
   :two: Rajouter 


### Example de DCL & DDL:

. lancer le CLI (Command Level Interface) de MySQL

```
#  mysql --user root --password
```


. Dans le CLI

.. créer une base de données (DDL)

```
mysql> CREATE DATABASE etudiants;
```

.. créer les utilisateurs (DDL et DCL)

- Version Longue

```
mysql> CREATE USER 'etudiants'@'localhost' IDENTIFIED BY 'etudiants_1';
mysql> GRANT ALL ON etudiants.* TO 'etudiants'@'localhost';
```

# [Participation](Participation.md)
