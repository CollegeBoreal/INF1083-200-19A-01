-- imprimer les numeros des livraisons de tous les images 

SELECT * FROM DELIVERIES JOIN IMAGES USING (image);
