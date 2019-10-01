--Imprimer l'enregistrement comprenant la ville Lubumbashi



SELECT 
    m.last_name AS 'Nom',
    SUM(p.amount) AS 'Montant Total de la Facture'
FROM
    customer m,
    payment p,
    address a,
    city c
WHERE
    a.address_id = m.address_id AND    
    p.customer_id = m.customer_id AND
    c.city_id = a.city_id
        AND c.city LIKE 'Lubumbashi'
GROUP BY m.last_name;



--Imprimer le nom et le montant de factures comprenant les habitant de Congo et l'algerie



Select o.country AS Pays, m.last_name as Nom, p.amount as Facture from 
customer m
inner join address a on m.address_id = a.address_id
inner join city c on a.city_id = c.city_id 
inner join country o on o.country_id = c.country_id 
inner join payment p on p.customer_id = m.customer_id 
where country like 'Congo%' OR country like 'Algeria';



--Imprimer le nom et le montant de la facture totale des habitant de Congo et l'Algerie



SELECT 
    IFNULL(o.country, 'TOUS LES PAYS') AS Pays,
    IFNULL(m.last_name, 'Total') AS Nom,
    SUM(p.amount) AS Facture
FROM
    customer m
INNER JOIN address a ON m.address_id = a.address_id
INNER JOIN city c ON a.city_id = c.city_id
INNER JOIN country o ON o.country_id = c.country_id
INNER JOIN payment p ON p.customer_id = m.customer_id
WHERE
    country LIKE 'Congo%'
    OR country LIKE 'Algeria'
GROUP BY o.country , m.last_name
having SUM(p.amount)>100 ;
