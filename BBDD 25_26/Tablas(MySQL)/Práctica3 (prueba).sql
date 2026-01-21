-- DESCRIBE city;
-- DESCRIBE country;
-- DESCRIBE countrylanguage;

create database if not exists prueba;

SHOW CHARACTER SET;
SHOW COLLATION;

CREATE TABLE IF NOT EXISTS collationTests (
	name01 CHAR(5) CHARSET utf8 COLLATE utf8_unicode_ci,
    name02 CHAR(5) CHARSET latin1 COLLATE latin1_general_cs,
    name03 CHAR(5) CHARSET ASCII COLLATE ascii_general_ci,
    name04 CHAR(5) CHARSET utf8 COLLATE utf8_bin,
    name05 CHAR(5) CHARSET latin1 COLLATE latin1_bin,
    name06 CHAR(5) CHARSET ASCII COLLATE ascii_bin
) engine='InnoDB';

select * from collationTests;

INSERT INTO collationTests VALUES ('Ñandú','Ñandú','Nandu','Ñandú','Ñandú','Nandu');

SELECT LENGTH(name01) AS bL01, CHAR_LENGTH(name01) AS cL01 FROM collationTests;
SELECT LENGTH(name02) AS bL02, CHAR_LENGTH(name02) AS cL02 FROM collationTests;
SELECT LENGTH(name03) AS bL03, CHAR_LENGTH(name03) AS cL03 FROM collationTests;

SELECT * FROM collationTests WHERE name01 LIKE 'N%';
SELECT * FROM collationTests WHERE name01 LIKE 'ñ%';
SELECT * FROM collationTests WHERE name01 LIKE 'Ñ%';
SELECT * FROM collationTests WHERE name04 LIKE 'N%';
SELECT * FROM collationTests WHERE name04 LIKE 'ñ%';
SELECT * FROM collationTests WHERE name04 LIKE 'Ñ%';

DROP TABLE collationTests;

CREATE TABLE IF NOT EXISTS spanishCollation (
    name01 VARCHAR(15) CHARSET utf8 COLLATE utf8_spanish_ci,
    name02 VARCHAR(15) CHARSET utf8 COLLATE utf8_spanish2_ci
) ENGINE=MyISAM;

INSERT INTO spanishCollation VALUES ('Baño', 'Baño'),('Carlos', 'Carlos'),('Cruzada', 'Cruzada'),('Chile', 'Chile'),('Llorar', 'Llorar'),('Lámina', 'Lámina'),('Loreto', 'Loreto'),('Dedo', 'Dedo');

SELECT * FROM spanishCollation ORDER BY name01;
SELECT * FROM spanishCollation ORDER BY name02;

DROP TABLE spanishCollation;
