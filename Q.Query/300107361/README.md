# Capture de ma Base de donnees!
## Car_Center

![image](database1.png)

## :ab: Query Section

* 1- Imprimer le model et la marque des voitures d'origines Americaines.
* 2- Imprimer le model et le prix des voitures de couleurs noirs.
* 3- Imprimer le nom des clients et les dates des transactions effectuees. 

========================

# Requetes

:one:
```sql
 SELECT * FROM MAKES 
 JOIN MODELS ON (MAKES.make = MODELS.make)
 WHERE MAKES.origin = 'usa';
 ```

:two:
```sql
 SELECT * from MODELS 
 JOIN PRICES ON (MODELS.price = PRICES.price)
 WHERE MODELS.colour = 'blk';
```

:three:
```sql
  SELECT * FROM CUSTOMERS
  JOIN PAYMENTS
  ON (CUSTOMERS.customer = PAYMENTS.customer);
  ```



Author: <.@Toch90>
