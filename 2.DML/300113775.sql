


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



Imprimer le nom et le montant de factures comprenant les habitant de Congo et l'algerie









Imprimer le nom et le montant de la facture totale des habitant de Congo et l'Algerie




