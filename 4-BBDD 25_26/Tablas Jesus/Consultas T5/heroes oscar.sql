select nombre, ciudad from edu_heroes
/*Me da todas las ciudades menos Madrid*/
where ciudad != 'Madrid';

select nombre, nivel_peligro from edu_villanos
where nivel_peligro > 6;

select * from edu_misiones
where recompensa > 5000;

select * from edu_heroes
/*los heroes cuyo poder principal contenga "control" para usar cadenas de caracteres usar el patron like */
where poder_principal like 'Control%';

/*Heroes con mision asignada*/
select h.nombre as heroes, m.nombre as mision
from edu_heroes h
join edu_asignaciones a
on h.id_hero = a.id_hero
join edu_misiones m
on a.id_mision = m.id_mision;

/*Devolver todos los heroes sin asignacion de mision*/
select * from edu_misiones;
select * from edu_heroes;
select * from edu_asignaciones;

/*Añadir mision (siempre para insertar cosas usar insert into)*/
insert into edu_misiones (nombre,ciudad,recompensa) values ('Salvar al jamón' , 'Salamanca' ,10000);
select * from edu_misiones;

/*añadir heroe*/
insert into edu_heroes (nombre,alias,poder_principal, ciudad) values ('Federico Anaya','Super Calle','Correr rapido','Salamanca');

select h.nombre
from edu_heroes h
left join edu_asignaciones a
on h.id_hero = a.id_hero
where a.id_asignacion is null;
/*si aqui usase un join no funcionaria por que nunca encontraria un null por eso usa un left join*/

/*mirar todas las combinaciones posibles de heroes y misiones*/
select h.nombre as heroe, m.nombre as mision
from edu_heroes h
cross join edu_misiones m;

/*Nombre de los heroes que vivan en la misma ciudad*/
select  h1.nombre as heroe1, h2.nombre as heroe2, h1.ciudad
from edu_heroes h1
join edu_heroes h2
on h1.ciudad = h2.ciudad
where h1.id_hero <> h2.id_hero;

/*Heroes que los villanos han derrotado*/
select h.nombre as heroe, v.nombre as villano
from edu_derrotas d 
join edu_heroes h on d.id_hero = h.id_hero
join edu_villanos v on d.id_villano = v.id_villano;


/*Heroes con su numero de mision asignado*/
select h.nombre, count(*) as asignaciones
from edu_heroes h
join edu_asignaciones a
on h.id_hero = a.id_hero
group by h.nombre



