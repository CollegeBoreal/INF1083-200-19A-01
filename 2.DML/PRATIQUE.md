# Pratique de manipulation de données

### Exercice:

1. Imprimer le nom et le montant de la facture totale des personnes habitant la ville de Lubumbashi
2. Imprimer le nom et le montant de factures des personnes habitant le Congo et l'algerie (ANSI-92)
3. Imprimer le nom et le montant de la facture totale des personnes habitant le Congo et l'Algerie (ANSI-92)

* Correction
Se référer au fichier suivant:

[JOIN](JOIN.md)

### Perfectionnement:

1. Quel(le) acteur(rice) est apparu(e) dans le plus de films?
2. Quel est la longueur moyenne des films par catégorie? Trié par longueur moyenne
3. Quel sont les catégories qui ont les plus longs films (i.e. dépassant la longueur moyenne) ? Trié par longueur moyenne

#### Références: 

http://code.openark.org/blog/mysql/mysql-joins-on-vs-using-vs-theta-style

```
MySQL joins: ON vs. USING vs. Theta-style
July 11, 2012
What is the difference between the following three syntaxes?

  SELECT * FROM film JOIN film_actor ON (film.film_id = film_actor.film_id)
  SELECT * FROM film JOIN film_actor USING (film_id)
  SELECT * FROM film, film_actor WHERE film.film_id = film_actor.film_id

The difference is mostly syntactic sugar, but with a couple interesting notes.

To put names, the first two are called "ANSI-style" while the third is called "Theta-style".
```
