SELECT CONCAT(title, ' - ', release_year) AS 'lançamento_do_filme' FROM sakila.film;
SELECT CONCAT(title, ' -- ', rating) AS 'classificação' FROM sakila.film;
SELECT CONCAT(address, ' - ', district) AS 'endereço' FROM sakila.address;