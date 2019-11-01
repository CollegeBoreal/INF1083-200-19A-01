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

- création d'un utilsateur pour l'utilisation à distance

:bulb: Le caractère `%` indiquant un client (IP address) quelconque

```
mysql> CREATE USER 'etudiants'@'%' IDENTIFIED BY 'etudiants_1';
mysql> GRANT ALL ON etudiants.* TO 'etudiants'@'%';
```


## References

Raspberry Pi image:  `hypriot/rpi-mysql:latest`
