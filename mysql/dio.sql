CREATE TABLE pessoas(
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30) NOT NULL,
  nascimento DATE
)

INSERT INTO pessoas (nome, nascimento) VALUES ("Fabio", "1991 11 08")
INSERT INTO pessoas (nome, nascimento) VALUES ("Felipe", "1995 07 17")
INSERT INTO pessoas (nome, nascimento) VALUES ("Natalia", "1990 05 22")

SELECT * FROM pessoas
SELECT nome From pessoas

UPDATE pessoas set nome = "Fabio Moura" WHERE id = 1

DELETE FROM pessoas WHERE id = 1
ORDER BY nome
ORDER BY nome DESC


ALTER TABLE pessoas ADD genero VARCHAR(1) NOT NULL AFTER nascimento
INSERT INTO pessoas (genero) VALUES ("F") WHERE id =3
INSERT INTO pessoas (genero) VALUES ("M") WHERE id =1
INSERT INTO pessoas (genero) VALUES ("M") WHERE id =2

SELECT COUNT(qtd), genero FROM pessoas GROUP BY genero

DROP TABLE pessoas
