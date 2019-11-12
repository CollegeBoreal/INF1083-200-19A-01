# Quizz (2019-11-19)

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

INT, DOUBLE, FLOAT: Format => 1 - 10, 1.0 - 10.0,  

DATE: Format => '1990-01-01' 

BOOLEAN: Format => True, False 

VARCHAR(<size>), TEXT Format => '1', '2.6', '2009-12-02'
  
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

 ** Keys
 
 ### Primaire 
     
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
 

* DCL

- 

Permissions

```
> GRANT <Privilege> ON <base de donnee>.<tables> (* wildcard) TO <USER>;  
```

* Privilege `ALL`

- REVOKE

* DML

voir `INSERT`



* MySQL

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

