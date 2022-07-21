SELECT * FROM sakila.film;

SELECT title, release_year, description FROM sakila.film;

SELECT COUNT(*) FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;

SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

SELECT * FROM sakila.actor ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language limit 5 OFFSET 1;

SELECT * FROM sakila.film;

SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost;