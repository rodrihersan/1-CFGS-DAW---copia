-- series que no se han visto
select e.id_serie from netflix_visualizaciones v right join netflix_episodios e
on v.id_episodio = e.id_episodio
where v.id_visualizacion is null;

-- nombre de las series que no se han visto nyunca
select s.titulo from netflix_series s where id_serie in 
(
	select e.id_serie from netflix_visualizaciones v right join netflix_episodios e
	on v.id_episodio = e.id_episodio
	where v.id_visualizacion is null
);

-- ventas que sean mayores que otra venta del mismo usuario
select * from app_ventas v1 inner join app_ventas v2
on v1.usuario_id = v2.usuario_id and v1.importe > v2.importe
WHERE v1.id <> v2.id;

-- usuarios cuya facturacion total sean mayor que la del usuario 4
select usuario_id, nombre from app_ventas a inner join netflix_usuarios u
on a.usuario_id = u.id_usuario
group by usuario_id 
having SUM(importe) >
(
	select SUM(importe) as facturacion_user4 from app_ventas v where usuario_id = 4
);
		-- nombre de estos usuarios
        
-- villanos derrotados por heroes que viven en madrid
select nombre from edu_villanos where id_villano in
(
	select v.nombre as nombre_villano from edu_derrotas d inner join edu_villanos v
	on d.id_villano = v.id_villano where id_hero in
	(
	select id_hero from edu_heroes h where ciudad = 'Madrid' -- like contiene por ejemplo 'or'
	)
);

select * from edu_asignaciones;

-- numero total de misiones por heroe
select a.id_hero ,count(*) from edu_heroes h inner join edu_asignaciones a
on a.id_hero = h.id_hero 
group by h.id_hero;

-- darme los heroes cuyo nombre empiece por L o su tercera letra sea una A
select nombre from edu_heroes where nombre like 'L%' or nombre like '__A%';

-- promedio de recompensas por la ciudad de mision
select ciudad, AVG(recompensa) from edu_misiones
group by ciudad;

-- numero de misiones por ciudad con mas de una mision
select ciudad, count(recompensa) from edu_misiones
group by ciudad having count(recompensa) > 1;

-- heroes que han hecho misiones en madrid o sevilla
select * from edu_heroes h inner join edu_asignaciones a
on h.id_hero = a.id_hero 
inner join edu_misiones m 
on a.id_mision = m.id_mision
where m.ciudad = 'madrid' or m.ciudad = 'sevilla';

select nombre from edu_heroes h where h.id_hero in (
	select id_hero from edu_asignaciones where id_mision in(
		select id_mision from edu_misiones m where m.ciudad = 'madrid' or m.ciudad = 'sevilla'
        )
);

-- heroes que han derrotado a villanos de nivel >= 8 ordenados por derrotas
select h.id_hero, count(*) derrotas from edu_heroes h inner join edu_derrotas d
on h.id_hero = d.id_hero
inner join edu_villanos v
on v.id_villano = d.id_villano
where v.nivel_peligro >= 8
group by (h.id_hero)
order by derrotas;

-- visualizaciones que se han visualizado mas que la media (porcdntaje)
-- HAY UN EJERCICIO MUY MUY MUY
-- FACIL
select * from netflix_visualizaciones where porcentaje_visto >
(
	select AVG(porcentaje_visto) from netflix_visualizaciones
);