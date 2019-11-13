# Quizz (2019-11-19)

[:bulb: What_are_DDL,_DML_and_DQL?](https://en.wikibooks.org/wiki/MySQL/Language/Definitions:_what_are_DDL,_DML_and_DQL%3F)

## :a: DDL

:one: CREATE {DATABASE/TABLE/USER} (target);

##### TABLE

```SQL
> CREATE TABLE <name> ( 
    <field1> <type1> <option1>, 
    <field2> <type1> <option2>, 
    ...
  );
```

* Type :

| Type                 |  SQL                  | Format                   |
|----------------------|-----------------------|--------------------------|
| Nombre               |INT, DOUBLE, FLOAT     | 1 - 10, 1.0 - 10.0       |  
| Date                 | DATE                  | '1990-01-01'             |
| booleen              | BOOLEAN               | True, False              |
| Chaine de caracteres | VARCHAR(<size>), TEXT | '1', '2.6', '2009-12-02' |
  
* Option: 

AUTO_INCREMENT -- Omettre (N'apparait pas) dans le INSERT statement

NOT NULL -- Le champ ne peut etre null sinon Erreur

PRIMARY KEY -- Peut etre mis ailleurs


##### USER 

- Locale

```SQL
> CREATE USER 'nom'@'localhost' IDENTIFIED BY 'passwd'; -- Utilisateur accedant a la machine locale
```

- Distante (avec `wildcard`)

```SQL
> CREATE USER 'nom'@'%' IDENTIFIED BY 'passwd'; -- Utilisateur accedant a la machine distante
```



:two: DROP {DATABASE/TABLE}

:three: Keys
 
 ### [Primaire](http://www.mysqltutorial.org/mysql-primary-key/) 
     
```SQL
    CREATE TABLE CLIENTS ( ...
       client INT AUTO_INCREMENT,
    
    
    PRIMARY KEY(client)    
    );
``` 

### composite (Primaire) 

```SQL
    CREATE TABLE VENTES ( ...
       produit INT,
       client INT,
    
    
    PRIMARY KEY(produit, client)    
    );
``` 
 ### Etrangere
 
```SQL
    CREATE TABLE VILLES ( ...
       ville INT AUTO_INCREMENT,
       pays INT,
    
    
    PRIMARY KEY(ville).
    FOREIGN KEY(pays) REFERENCES PAYS(pays),
    );
``` 
 

:b: DCL


:four: Permissions

```
> GRANT <Privilege> ON <base de donnee>.<tables> (* wildcard) TO <USER>;  
```

* Privilege `ALL`

- REVOKE

* DML

voir `INSERT`



:ab: MySQL

- show <artifacts>
    
```
mysql> show databases;
```

```
mysql> show tables;
```


- describe

```
mysql> describe <nom de table>;
```


- use

```
mysql> use <database>;
```

