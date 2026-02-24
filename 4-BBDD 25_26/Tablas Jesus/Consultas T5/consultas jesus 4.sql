
CREATE TABLE rrss_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    pais VARCHAR(50)
);

CREATE TABLE rrss_publicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    contenido VARCHAR(200),
    fecha DATE,
    FOREIGN KEY (usuario_id) REFERENCES rrss_usuarios(id)
);

CREATE TABLE rrss_likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    publicacion_id INT,
    FOREIGN KEY (usuario_id) REFERENCES rrss_usuarios(id),
    FOREIGN KEY (publicacion_id) REFERENCES rrss_publicaciones(id)
);

CREATE TABLE rrss_comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    publicacion_id INT,
    texto VARCHAR(200),
    FOREIGN KEY (usuario_id) REFERENCES rrss_usuarios(id),
    FOREIGN KEY (publicacion_id) REFERENCES rrss_publicaciones(id)
);

CREATE TABLE rrss_seguidores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seguidor_id INT,
    seguido_id INT,
    FOREIGN KEY (seguidor_id) REFERENCES rrss_usuarios(id),
    FOREIGN KEY (seguido_id) REFERENCES rrss_usuarios(id)
);

INSERT INTO rrss_usuarios (nombre, edad, pais) VALUES
('Alex', 16, 'España'), 
('Lucia', 18, 'México'), 
('Mario', 17, 'Argentina'),
('Sofia', 20, 'Chile'),
('Diego', 19, 'España'),
('Nerea', 21, 'España'),
('Tomas', 15, 'Chile');

INSERT INTO rrss_publicaciones (usuario_id, contenido, fecha) VALUES
(1, 'Mi primer post!', '2025-01-01'),
(2, 'Nuevo video en mi canal', '2025-01-02'),
(3, 'Foto de mi gato', '2025-01-02'),
(4, 'Viaje increíble', '2025-01-03'),
(5, 'Aprendiendo SQL', '2025-01-04'),
(7, 'Post sin likes', '2025-01-05');

INSERT INTO rrss_likes (usuario_id, publicacion_id) VALUES
(2,1),
(3,1),
(4,1),
(1,2),
(3,2),
(1,3),
(2,3),
(4,4),
(2,5),
(3,5),
(6,1),
(6,2);

INSERT INTO rrss_comentarios (usuario_id, publicacion_id, texto) VALUES
(2,1,'Buen post!'),
(3,1,'Me gusta'),
(4,2,'Genial video'),
(1,3,'Qué mono'),
(5,4,'Qué envidia'),
(2,5,'Yo también estudio SQL'),
(3,5,'Buenísimo');

INSERT INTO rrss_seguidores (seguidor_id, seguido_id) VALUES
(2,1),
(3,1),
(4,1),
(1,2),
(3,2),
(1,3),
(2,3),
(4,5);



-- Mostrar todas las publicaciones
select * from rrss_publicaciones;


-- Usuarios cuyo nombre empiece por letra
select nombre from rrss_usuarios where nombre like 'A%';


-- usuarios cuyo nombre termina por A
select nombre from rrss_usuarios where nombre like '%A';


-- usuario que tienen una E
select nombre from rrss_usuarios where nombre like '%e%';
-- OPERADOR LIKE SIEMPRE QUE DIGAN SI ALGO CONTIENE TERMINA O EMPIEZA




-- Usuario con penultima letra A
select nombre from rrss_usuarios where nombre like '%a_';


-- 
select nombre from rrss_usuarios where nombre like '_o%';

-- Usuarios que no son de España
select nombre from rrss_usuarios where pais != 'españa';


-- Publicaciones ordenadas de mas reciente a mas antiguas (EXAMEN por el ORDER BY)
select * from rrss_publicaciones order by fecha desc; -- ejemplos: order by fecha desc, contenido desc; (o uno desc y otro asc).


-- Nombres usuarios ordenados alfabeticamente
select * from rrss_usuarios order by nombre; -- Por defecto es ascendente, no hace falta ponerlo


-- Publicaciones de usuarios menores de edad (EXAMEN 100% -- INNER JOIN)
select p.* from rrss_usuarios u
inner join  rrss_publicaciones p
on u.id = p.usuario_id
where edad < 18;


-- Nombre usuario y contenido de las publicaciones a la que el usuario dio like
-- 1- Nombre usuario (primer paso) de las publicaciones a las que dio like
-- 2- contenido de las publicaciones
select u.nombre, p.contenido from rrss_usuarios u 
inner join rrss_likes l
on u.id = l.usuario_id -- fin del paso uno
inner join rrss_publicaciones p
on l.publicacion_id = p.id;


-- nombres de quien sigue a quien
select u.nombre, u2.nombre from rrss_seguidores s
inner join rrss_usuarios u
on s.seguido_id = u.id
inner join rrss_usuarios u2 
on s.seguidor_id = u2.id;


-- mostrar likes recibidos en publicaciones de alex
select l.* from rrss_likes l
inner join rrss_publicaciones p
on l.publicacion_id = p.id
inner join rrss_usuarios u
on p.usuario_id = u.id
where u.nombre ='Alex';


-- contenido de las publicaciones y nombre del autor
select u.nombre, p.contenido from rrss_usuarios u
inner join rrss_publicaciones p 
on u.id = p.usuario_id;


-- numero de likes por publicacion
select p.contenido, count(publicacion_id) 
from rrss_likes l
inner join rrss_publicaciones p
on l.publicacion_id = p.id
group by publicacion_id;


-- nombre del usuario que no sigue a nadie (clase)



-- Todas las publicaciones de tomas
select p.* from rrss_usuarios u -- p* porque queremos la infornacion de las publicaciones solamente.
inner join rrss_publicaciones p
on u.id = p.usuario_id
where u.nombre = 'Tomas';


-- Likes de tomas (0 likes, tabla vacia)
select l.* from rrss_usuarios u
inner join rrss_likes l
on l.usuario_id = u.id -- se une esto porque es lo que tienen en común
where u.nombre = 'Lucia';


-- Contenido de las publicaciones de lucia
select p.contenido from rrss_publicaciones p
inner join rrss_usuarios u
on p.usuario_id = u.id
where u.nombre = 'Lucia';


-- Publicaciones con mas de dos likes
select l.publicacion_id from rrss_publicaciones p
inner join rrss_likes l
on p.id = l.publicacion_id
group by l.publicacion_id
having COUNT (l.publicacion_id > 2);

-- agrupando el total de likes por publicacion id
select l.publicacion_id, COUNT (l.publicacion_id) total from rrss_publicaciones p
inner join rrss_likes l
on p.id = l.publicacion_id
group by l.publicacion_id
having total > 2;

-- Dame id seguidores cuyo nombre contenga MA
select nombre from rrss_usuarios u
where id in( -- no se puede comparar un id con * (antes donde habia s.seguidor_id habia un * (siguiente linea (222)))
	select s.seguidor_id from rrss_seguidores s
	where s.seguidor_id in
	(	
    select id 
	from rrss_usuarios where nombre like  '%ma%'
    )
);

-- ejemplo de otra cosa
-- select nombre from rrss_usuarios where nombre like  '%ma%';
-- select nombre from rrss_usuarios where nombre like '%m%' or nombre like '%a%';




-- nombre usuario que mas likes han dado

select nombre from rrss_usuarios where id in 
(
	select l.usuario_id
    from rrss_likes l
    group by (l.usuario_id)
    order by count (*) desc limit 1 -- da error porque no admite limit en una subconsulta, pero esta bien hecha 
);

-- usuarios que no han hecho ninguna publicación
select * from rrss_usuarios where id not in
(
	select p.usuario_id
    from rrss_publicaciones p
);
