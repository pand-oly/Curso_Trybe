SELECT *
FROM PecasFornecedores.Pecas
WHERE name LIKE 'Gr%';

SELECT *
FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

SELECT peca, Preco, fornecedor
FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';

SELECT *
FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name;

SELECT COUNT(*)
FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';