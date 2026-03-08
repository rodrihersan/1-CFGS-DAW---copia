CREATE TABLE vg_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    pais VARCHAR(50)
);

CREATE TABLE vg_juegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    genero VARCHAR(50),
    precio DECIMAL(5,2)
);

CREATE TABLE vg_compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    juego_id INT,
    fecha DATE,
    FOREIGN KEY (usuario_id) REFERENCES vg_usuarios(id),
    FOREIGN KEY (juego_id) REFERENCES vg_juegos(id)
);

CREATE TABLE vg_resenas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    juego_id INT,
    puntuacion INT,
    texto VARCHAR(200),
    FOREIGN KEY (usuario_id) REFERENCES vg_usuarios(id),
    FOREIGN KEY (juego_id) REFERENCES vg_juegos(id)
);

CREATE TABLE vg_amigos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    amigo_id INT,
    FOREIGN KEY (usuario_id) REFERENCES vg_usuarios(id),
    FOREIGN KEY (amigo_id) REFERENCES vg_usuarios(id)
);

-- DATOS
INSERT INTO vg_usuarios VALUES
(1,'Carlos',17,'España'),
(2,'Ana',22,'México'),
(3,'Pedro',15,'España'),
(4,'Laura',19,'Argentina'),
(5,'Miguel',25,'España'),
(6,'Sara',16,'Chile'),
(7,'Ivan',30,'México');

INSERT INTO vg_juegos VALUES
(1,'Zelda','Aventura',59.99),
(2,'FIFA','Deportes',49.99),
(3,'Minecraft','Sandbox',29.99),
(4,'Call of Duty','Acción',69.99),
(5,'Stardew Valley','Simulación',14.99),
(6,'Hollow Knight','Aventura',15.99);

INSERT INTO vg_resenas (usuario_id, juego_id, puntuacion, texto) VALUES
(1,1,9,'Increíble juego'),
(2,1,10,'Obra maestra'),
(3,3,8,'Muy entretenido'),
(4,4,7,'Bastante bueno'),
(5,1,9,'Me encantó'),
(1,3,8,'Muy creativo'),
(2,2,6,'Normal');

INSERT INTO vg_amigos (usuario_id, amigo_id) VALUES
(1,2),
(2,1),
(1,3),
(3,1),
(2,4),
(4,5);

INSERT INTO vg_compras (usuario_id, juego_id, fecha) VALUES
(1,1,'2024-01-10'),
(1,3,'2024-01-15'),
(2,1,'2024-01-20'),
(2,2,'2024-02-01'),
(3,3,'2024-02-05'),
(4,4,'2024-02-10'),
(4,5,'2024-02-15'),
(5,1,'2024-03-01'),
(5,4,'2024-03-05'),
(5,6,'2024-03-10');
TRUNCATE TABLE vg_compras;
TRUNCATE TABLE vg_amigos;
TRUNCATE TABLE vg_resenas;
TRUNCATE TABLE vg_usuarios;
TRUNCATE TABLE vg_usuarios;


-- Usuarios cuyo nombre empiece por C
select nombre from vg_usuarios where nombre like 'C%';

-- Usuarios cuyo nombre contenga una A
select nombre from vg_usuarios where nombre like '%A%';

-- Juegos del género Aventura
select titulo from vg_juegos where genero = 'aventura';

-- Usuarios menores de 18 años ordenados de menor a mayor edad
select nombre, edad from vg_usuarios where edad < 18 order by edad asc;

-- Juegos ordenados de más caro a más barato
select titulo, precio from vg_juegos order by precio desc;

-- Nombre del usuario y título del juego de cada compra
select u.nombre,  j.titulo, c.id  from vg_usuarios u inner join vg_compras c
on u.id = c.usuario_id
inner join vg_juegos j 
on j.id = c.juego_id;

-- Compras realizadas por usuarios menores de edad
select * from vg_usuarios u inner join vg_compras c 
on u.id = c.usuario_id
where u.edad < 18;

-- Título de los juegos que ha comprado Carlos
select j.titulo, u.nombre from vg_usuarios u inner join vg_compras c
on u.id = c.usuario_id 
inner join vg_juegos j
on j.id = c.juego_id
where u.nombre = 'Carlos';

-- Nombre del usuario y texto de sus reseñas
select u.nombre, r.texto from vg_usuarios u inner join vg_resenas r
on u.id = r.usuario_id;

-- Nombres de pares de amigos (quien es amigo de quien, mostrando nombres)
select u.id, u.nombre, a.amigo_id from vg_usuarios u inner join vg_amigos a
on u.id = a.usuario_id;

-- Número de compras por usuario (mostrar nombre y total)
select u.nombre, count(c.id) from vg_usuarios u inner join vg_compras c
on u.id = c.usuario_id
group by u.nombre;

-- Juego con más reseñas
select j.titulo, count(r.puntuacion) from vg_juegos j inner join vg_resenas r
on j.id = r.juego_id
group by j.titulo limit 1;

-- Usuarios que han comprado más de 2 juegos
select u.nombre, count(c.id) from vg_usuarios u inner join vg_compras c
on u.id = c.usuario_id
group by u.nombre having count(c.id) > 2;

-- Puntuación media por juego (mostrar título y media)
select j.titulo, avg(r.puntuacion) from vg_resenas r inner join vg_juegos j
on r.juego_id = j.id
group by j.titulo;