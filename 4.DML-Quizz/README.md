# Quizz 

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
 
     --- Primaire 
```SQL
    CREATE TABLE FACTURES ( ...
       facture INT AUTO_INCREMENT,
    
    
    PRIMARY KEY(facture)    
    );
``` 

* DCL

- GRANT
- REVOKE

* DML


* MySQL

- show 


