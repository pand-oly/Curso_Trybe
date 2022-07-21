SELECT * FROM hr.employees;

SELECT MAX(salary) FROM hr.employees;

SELECT MAX(salary) - MIN(salary) FROM hr.employees;

SELECT job_id, AVG(salary) AS average_salary
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

SELECT SUM(salary) FROM hr.employees;

SELECT 
  MAX(salary) AS Maior_salario,
  MIN(salary) AS Menor_salario,
  SUM(salary) AS Soma_de_todos_salarios,
  ROUND(AVG(salary),2) AS Media_de_todos_salarios
FROM hr.employees;

SELECT job_id , COUNT(*) AS it_prog_count
FROM hr.employees
WHERE job_id = 'it_prog';

SELECT job_id, SUM(salary) AS SUM_SALARY
FROM hr.employees
GROUP BY job_id;

SELECT job_id, SUM(salary) AS SUM_SALARY
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';

SELECT job_id, AVG(salary) AS average_salary
FROM hr.employees
GROUP BY job_id
HAVING NOT job_id = 'it_prog';

SELECT department_id,
	AVG(salary) AS average_salary ,
	COUNT(*) AS number_of_employees
FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;