# DCL & DDL


https://www.w3schools.in/mysql/ddl-dml-dcl/


![image](https://www.w3schools.in/wp-content/uploads/2014/08/SQL-Commands-1-700x470.png)


### DCL & DDL:

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

# [Participation](Participation.md)
