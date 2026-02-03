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

#heroes que viven en la misma ciudad que otros heroes
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
group by h.nombre