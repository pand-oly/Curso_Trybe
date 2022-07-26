CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;
CREATE TABLE animais (
  animal_id INT primary KEY AUTO_INCREMENT,
  nome VARCHAR(30) NOT NULL,
  especie VARCHAR(30) NOT NULL,
  sexo CHAR(1) NOT NULL,
  idade TINYINT NOT NULL,
  localizacao VARCHAR(15) NOT NULL
);
CREATE TABLE gerente (
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(15) NOT NULL
);
    
CREATE TABLE cuidadores (
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(15) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE slh (
  animal_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
);