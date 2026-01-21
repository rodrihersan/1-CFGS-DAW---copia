SELECT * from country where LifeExpectancy>65;
SELECT * from country where LifeExpectancy>80;
SELECT LifeExpectancy from country where Name LIKE 'Spain';
select * FROM country where LifeExpectancy>70 order by name desc;

Select "Estadisticas de paises","" from dual 
union
select "superficie total del mundo", cast(sum(SurfaceArea) as char) from country 
union
Select "Paises con esperanza de vida mayor de 60 años",cast(count(*) as char) from country 
where LifeExpectancy >60
union
Select "Paises con esperanza de vida mayor de 70 años",cast(count(*) as char) from country 
where LifeExpectancy >70
union
Select "Paises con esperanza de vida mayor de 75 años",cast(count(*) as char) from country 
where LifeExpectancy >75
union 
Select "Poblacion total mundial", cast(sum(population) as char) from country
union
select "Paises con mas de 30 millones de habitants", cast(count(*) as char) from country 
where population >30000000;

Select * from country;

update country set avgpopulation=Population/SurfaceArea;

insert into country values ('ESP', 'Spain', 'Europe', 'Southern Europe', '505992.00', 
'1492', '39441700', '77.95', '78.8', '553233.00', '532031.00', 'España', 'Constitutional 
Monarchy', 'Juan Carlos I', '653', 'ES', 'Teide');
insert into country values ('ESP', 'Spain', 'Europe', 'Southern Europe', '505992.00', 
'1492', '39441700', '77.95', '78.8', '553233.00', '532031.00', 'España', 'Constitutional 
Monarchy', 'Juan Carlos I', '653', 'ES', 'Mulacén');
insert into country values ('ESP', 'Spain', 'Europe', 'Southern Europe', '505992.00', 
'1492', '39441700', '77.95', '78.8', '553233.00', '532031.00', 'España', 'Constitutional 
Monarchy', 'Juan Carlos I', '653', 'ES', 'Aneto');

update city set CountryCode='FRN' where Name='Paris';

insert into city 
values(null,'Carcasone','FRN','Carcasona',50000);

update country set code='BEG' where code='BEL';

ALTER TABLE city
 DROP FOREIGN KEY `city_ibfk_1`,
 ADD CONSTRAINT `city_ibfk_2` FOREIGN KEY (`CountryCode`)
 REFERENCES `country` (`Code`)
 ON DELETE CASCADE
 ON UPDATE CASCADE;
 
 ALTER TABLE countrylanguage
 DROP FOREIGN KEY `countryLanguage_ibfk_1`,
 ADD CONSTRAINT `countryLanguage_ibfk_2` FOREIGN KEY (`CountryCode`)
 REFERENCES `country` (`Code`)
 ON DELETE CASCADE
 ON UPDATE CASCADE;

update country set code='BEG' where code='BEL';
select * from country;
select * from city where CountryCode='BEL';

select * from country where name='Belgium';
select * from city where countrycode='BEG';

Delete from country where code='MNG';
Select * from country where code='MNG';
Select * from city where countrycode ='MNG';
Select * from countrylanguage where countrycode='MNG';

rollback;

 DESCRIBE city;
 DESCRIBE country;
 DESCRIBE countrylanguage;

 



