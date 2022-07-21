SELECT 'This is SQL Exercise, Practice and Solution';

SELECT * FROM Scientists.AssignedTo LIMIT 3;

SELECT 10 + 15;

SELECT * FROM Scientists.Scientists;

SELECT name, hours FROM Scientists.Projects;

SELECT name FROM Scientists.Scientists ORDER BY name;

SELECT name FROM Scientists.Projects ORDER BY name DESC;

SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.')
FROM Scientists.Projects;

SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT project FROM Scientists.AssignedTo;

SELECT name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;

SELECT name FROM Scientists.Projects ORDER BY hours LIMIT 1 OFFSET 1;

SELECT name FROM Scientists.Projects ORDER BY hours LIMIT 5;

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') AS resultado FROM Scientists.Scientists;