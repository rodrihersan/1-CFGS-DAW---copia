#mostrar usuario, serie y porcentaje visto de cada actualizacion
select u.nombre, s.titulo, v.porcentaje_visto
from netflix_usuarios u
inner join
netflix_visualizaciones v
on u.id_usuario = v.id_usuario
inner join netflix_episodios e
on e.id_episodio = v.id_episodio
inner join netflix_series s
on s.id_serie = e.id_serie

#queremos los que hayan visto el 100% del titulo
where v.porcentaje_visto = 100;

insert into netflix_series (id_serie,titulo,genero) values (null,'Los serrano','comedia');

#series que no hayan sido vistas por ningun usuario
select s.titulo
from netflix_usuarios u
inner join
netflix_visualizaciones v
on u.id_usuario = v.id_usuario
inner join netflix_episodios e
on e.id_episodio = v.id_episodio
right join netflix_series s
on s.id_serie = e.id_serie
where v.porcentaje_visto is null;

#mismo que arriba con subconsulta
select s.titulo
from netflix_series s
where s.id_serie not in 
(
	select id_serie from 
	netflix_visualizaciones v
	inner join netflix_episodios e
	on v.id_episodio = e.id_episodio
);

#usuarios que ha visto al menos un episodio de la serie id = 2
select u.nombre
from netflix_usuarios u
inner join netflix_visualizaciones v
on u.id_usuario = v.id_usuario
inner join  netflix_episodios e
on e.id_episodio = v.id_episodio
where e.id_episodio = 2;

#lo mismo pero con any para practicarlo 
select nombre
from netflix_usuarios
where id_usuario in
(
	select u.id_usuario
	from netflix_usuarios u
	inner join netflix_visualizaciones v
	on u.id_usuario = v.id_usuario
	inner join  netflix_episodios e
	on e.id_episodio = v.id_episodio
	where e.id_episodio = 2
);

#usuarios que no ha terminado ningun episodio TIPICA DE EXAMEN
select *
from netflix_usuarios u
where not exists
(
	select *
	from netflix_visualizaciones v
	where v.id_usuario = u.id_usuario
	and v.porcentaje_visto = 100
);

