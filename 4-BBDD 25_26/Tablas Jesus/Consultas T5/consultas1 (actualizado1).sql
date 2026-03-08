select nombre, ciudad from edu_heroes
where ciudad != 'Madrid';

select nombre from edu_villanos
where nivel_peligro > 6;

select * from edu_misiones
where recompensa > 5000;

select * from edu_heroes
where poder_principal like '%control%';

select h.nombre as heroe, m.nombre as mision  
#ponemos as heroe as mision porque si ponemos solo h.nombre, m.nombre nos sacaria kla tabla con nombre (ambas) y no sabemos a que hace referencia ese nombre, si a villano heroe mision pulpos...				
from edu_heroes h
join edu_asignaciones a
ON h.id_hero = a.id_hero
JOIN edu_misiones m
ON a.id_mision = m.id_mision;

select * from edu_misiones;
select * from edu_heroes;
select * from edu_asignaciones;

select m.nombre as mision, h.nombre as heroe
from edu_misiones m
left join edu_asignaciones a
ON m.id_mision = a.id_mision
left join edu_heroes h
on a.id_hero = h.id_hero;

insert into edu_misiones (nombre,ciudad,recompensa) values ('Salvar al jamon','Salamanca',10000);

insert into edu_heroes (nombre, alias, poder_principal, ciudad) VALUES ('Federico Anaya', 'Super Calle','Correr Rapido', 'Salamanca');

select h.nombre
from edu_heroes h
left join edu_asignaciones a
ON h.id_hero = a.id_hero
where a.id_asignacion is null;


#combinacion heroes y misiones
select h.nombre as heroe,  m.nombre as mision
from edu_heroes h
CROSS JOIN edu_misiones m;


#heroes que viven en la misma ciudad que otros heroes PREGUNTAR JESUS
select h1.nombre as heroe1, h2.nombre as heroe2, h1.ciudad
from edu_heroes h1
JOIN edu_heroes h2
ON h1.ciudad = h2.ciudad WHERE h1.id_hero <> h2.id_hero;


#heroes y villanos a los quehan derrotado (los heroes)
	#IGUAL QUE EL DE HEROES YM ISIONES PERO CAMBIANDO MISIONES POR DERROTAS (PRIMER EJERCICIO ARRIBA DEL TODO)
    
    
#heroes con su numero de misiones asignadas 
select h.nombre, COUNT(a.id_asignacion) as asignaciones
from edu_heroes h
join edu_asignaciones a
on h.id_hero = a.id_hero
group by h.nombre;


#heroes que han hecho mas de una mision
select h.nombre, COUNT(h.id_hero) 
from edu_heroes h
inner join edu_asignaciones a
on h.id_hero = a.id_hero
group by h.id_hero
having count(h.id_hero) > 1;

#lo mismo haciendolo con una subconsulta   #pregunta tipica de examen (OSEA VA A CAER). Nos da una consulta (tabla) y no pide hacerlo subconsulta
select nombre 
from edu_heroes
where id_hero IN(
	select id_hero
	from edu_asignaciones
	group by id_hero
	having count(id_hero) > 1);

    
#suma de recompensa de cada id heroe #si hay que unir dos tablas relacionadas, la matoria de vexces se hara con un inner join #lo mas importante del tema 
select e.id_hero, SUM(recompensa)
from edu_heroes e
inner join edu_asignaciones a 
on e.id_hero = a.id_hero
inner join edu_misiones m
on a.id_mision = m.id_mision
group by e.id_hero;

#dos heroes con mas derrotas
select h.id_hero, count(d.id_derrota)
from edu_heroes h
inner join edu_derrotas d
on h.id_hero = d.id_hero
group by id_hero 
order by count(id_derrota) desc
LIMIT 2;

#heroes que han ganado mas recompensa que la media de todos los heroes
select e.id_hero, SUM(recompensa)
from edu_heroes e
inner join edu_asignaciones a
on e.id_hero = a.id_hero
inner join edu_misiones  m
on a.id_mision = m.id_mision
group by e.id_hero
having SUM(recompensa) >
(
	select AVG(recompensa)
	from edu_asignaciones a
	inner join edu_misiones m
	on a.id_mision = m.id_mision
);

#villano que no han sido derrotados nunca
select * from edu_villanos;
select * from edu_derrotas;

select *
from edu_villanos v
left join edu_derrotas d
on v.id_villano = d.id_villano
where d.id_villano is null;


#misiones cuya recompensa es mayor que la media de su ciudad
select 

 