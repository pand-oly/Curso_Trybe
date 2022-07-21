SELECT M.title, B.domestic_sales, B.international_sales
FROM pixar.movies AS M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id;

SELECT M.title, B.domestic_sales, B.international_sales
FROM pixar.movies AS M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id
WHERE B.domestic_sales < B.international_sales;

SELECT M.title, B.rating
FROM pixar.movies AS M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id
ORDER BY B.rating DESC;

USE pixar;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater t
LEFT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;


SELECT *
FROM pixar.movies AS M
INNER JOIN pixar.box_office AS B
ON M.id = B.movie_id
WHERE M.theater_id IS NOT NULL
AND B.rating > 8;

SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;