--Imprimer l'enregistrement comprenant la ville Lubumbashi

SELECT 
    customer.last_name AS 'Nom',
    SUM(p.amount) AS 'Montant Total de la Facture'
FROM
    customer,payment,address,city 
WHERE
    address.address_id = customer.address_id AND    
    payment.customer_id = customer.customer_id AND
    city.city_id = address.city_id
        AND city.city LIKE 'Lubumbashi'
GROUP BY customer.last_name;



--Imprimer le nom et le montant de factures comprenant les habitant de Congo et l'algerie


Select o.country AS Pays, customer.last_name as Nom, payment.amount as Facture 
from 
customer
inner join address on customer.address_id = address.address_id
inner join city  on address.city_id = city.city_id 
inner join country o on o.country_id = city.country_id 
inner join payment on payment.customer_id = customer.customer_id 
where country like 'Congo%' OR country like 'Algeria';




--Imprimer le nom et le montant de la facture totale des habitant de Congo et l'Algerie


SELECT 
    IFNULL(o.country, 'TOUS LES PAYS') AS Pays,
    IFNULL(customer.last_name, 'Total') AS Nom,
    SUM(payment.amount) AS Facture
FROM
    customer
INNER JOIN address  ON customer.address_id = address.address_id
INNER JOIN city ON adress.city_id = city.city_id
INNER JOIN country ON o.country_id = city.country_id
INNER JOIN payment ON payment.customer_id = customer.customer_id
WHERE
    country LIKE 'Congo%'
    OR country LIKE 'Algeria'
GROUP BY o.country , customer.last_name
having SUM(payment.amount)>100 ;

