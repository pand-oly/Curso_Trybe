SELECT act.actor_id, act.first_name, flm.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS flm
ON act.actor_id = flm.actor_id;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;