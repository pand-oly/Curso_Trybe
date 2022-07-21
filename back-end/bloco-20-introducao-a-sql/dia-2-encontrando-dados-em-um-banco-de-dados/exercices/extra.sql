SELECT DISTINCT first_name
FROM sakila.actor
ORDER BY first_name
LIMIT 1;

SELECT COUNT(DISTINCT first_name)
FROM sakila.actor;

SELECT * FROM sakila.city LIMIT 50 OFFSET 25;