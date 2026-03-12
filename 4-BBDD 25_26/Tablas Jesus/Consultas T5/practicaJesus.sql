-- CLIENTES
CREATE TABLE practica_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(150),
    telefono VARCHAR(20),
    ciudad VARCHAR(100),
    pais VARCHAR(100),
    created_at DATETIME
);

-- HOTELES
CREATE TABLE practica_hoteles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    ciudad VARCHAR(100),
    pais VARCHAR(100),
    estrellas INT,
    created_at DATETIME
);

-- HABITACIONES
CREATE TABLE practica_habitaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_id INT,
    numero VARCHAR(10),
    tipo VARCHAR(50),
    precio_noche DECIMAL(10,2),
    created_at DATETIME,
    FOREIGN KEY (hotel_id) REFERENCES practica_hoteles(id)
);

-- RESERVAS
CREATE TABLE practica_reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    habitacion_id INT,
    fecha_checkin DATE,
    fecha_checkout DATE,
    estado VARCHAR(50),
    created_at DATETIME,
    FOREIGN KEY (cliente_id) REFERENCES practica_clientes(id),
    FOREIGN KEY (habitacion_id) REFERENCES practica_habitaciones(id)
);

-- PAGOS
CREATE TABLE practica_pagos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reserva_id INT,
    importe DECIMAL(10,2),
    metodo_pago VARCHAR(50),
    fecha_pago DATETIME,
    created_at DATETIME,
    FOREIGN KEY (reserva_id) REFERENCES practica_reservas(id)
);

INSERT INTO practica_clientes (nombre,email,telefono,ciudad,pais,created_at) VALUES
('Carlos Martinez','carlos@email.com','600111111','Madrid','España',NOW()),
('Ana Lopez','ana@email.com','600222222','Barcelona','España',NOW()),
('Luis Garcia','luis@email.com','600333333','Sevilla','España',NOW()),
('Marta Ruiz','marta@email.com','600444444','Valencia','España',NOW()),
('John Smith','john@email.com','600555555','Londres','UK',NOW()),
('Laura Torres','laura@email.com','600666666','Madrid','España',NOW()),
('David Gomez','david@email.com','600777777','Bilbao','España',NOW()),
('Lucia Perez','lucia@email.com','600888888','Madrid','España',NOW()),
('Marco Rossi','marco@email.com','600999999','Roma','Italia',NOW()),
('Sophie Martin','sophie@email.com','601000000','Paris','Francia',NOW());

INSERT INTO practica_hoteles (nombre,ciudad,pais,estrellas,created_at) VALUES
('BlueWave Madrid','Madrid','España',5,NOW()),
('BlueWave Barcelona','Barcelona','España',4,NOW()),
('BlueWave Valencia','Valencia','España',4,NOW()),
('BlueWave Sevilla','Sevilla','España',5,NOW()),
('BlueWave Malaga','Malaga','España',4,NOW());

INSERT INTO practica_habitaciones (hotel_id,numero,tipo,precio_noche,created_at) VALUES
(1,'101','Individual',90,NOW()),
(1,'102','Doble',120,NOW()),
(1,'201','Suite',250,NOW()),
(2,'101','Individual',80,NOW()),
(2,'102','Doble',110,NOW()),
(2,'201','Suite',230,NOW()),
(3,'101','Individual',70,NOW()),
(3,'102','Doble',100,NOW()),
(4,'101','Doble',130,NOW()),
(4,'201','Suite',260,NOW()),
(5,'101','Individual',85,NOW()),
(5,'102','Doble',115,NOW());

INSERT INTO practica_reservas 
(cliente_id,habitacion_id,fecha_checkin,fecha_checkout,estado,created_at) VALUES
(1,1,'2025-01-10','2025-01-12','completada',NOW()),
(2,2,'2025-02-01','2025-02-05','completada',NOW()),
(3,4,'2025-03-10','2025-03-15','completada',NOW()),
(4,5,'2025-04-01','2025-04-04','cancelada',NOW()),
(5,3,'2025-01-15','2025-01-18','completada',NOW()),
(6,6,'2025-02-20','2025-02-22','completada',NOW()),
(7,7,'2025-03-05','2025-03-08','completada',NOW()),
(8,8,'2025-04-10','2025-04-12','completada',NOW()),
(9,9,'2025-05-01','2025-05-06','completada',NOW()),
(10,10,'2025-05-15','2025-05-20','completada',NOW()),
(1,11,'2025-06-01','2025-06-05','completada',NOW()),
(2,12,'2025-06-10','2025-06-12','pendiente',NOW()),
(1,1,'2026-01-10','2026-01-12','completada',NOW()),
(2,2,'2026-02-01','2026-02-05','completada',NOW()),
(3,4,'2026-03-10','2026-03-15','completada',NOW());

INSERT INTO practica_pagos (reserva_id,importe,metodo_pago,fecha_pago,created_at) VALUES
(1,180,'tarjeta','2025-01-10',NOW()),
(2,480,'tarjeta','2025-02-01',NOW()),
(3,400,'paypal','2025-03-10',NOW()),
(5,750,'tarjeta','2025-01-15',NOW()),
(6,460,'transferencia','2025-02-20',NOW()),
(7,210,'tarjeta','2025-03-05',NOW()),
(8,200,'paypal','2025-04-10',NOW()),
(9,650,'tarjeta','2025-05-01',NOW()),
(10,1300,'tarjeta','2025-05-15',NOW()),
(11,340,'paypal','2025-06-01',NOW());







-- Obtener los 3 clientes que más dinero han gastado en reservas.
select c.nombre, sum(p.importe) from practica_clientes c inner join practica_reservas r 
on c.id = r.cliente_id
inner join practica_pagos p 
on p.reserva_id = r.id
group by c.nombre limit 3;

-- Mostrar el hotel que tiene mayor número de habitaciones.
select  a.hotel_id, o.nombre, count(a.numero) from practica_habitaciones a inner join practica_hoteles o 
on a.hotel_id = o.id
group by a.hotel_id limit 1;

-- Mostrar el precio máximo de habitación por hotel.
select o.nombre, max(a.precio_noche) from practica_hoteles o inner join practica_habitaciones a 
on o.id = a.hotel_id
group by o.id, o.nombre
order by max(a.precio_noche) desc;

-- Mostrar los clientes que han realizado más de una reserva.
select c.nombre, count(r.id) from practica_clientes c inner join practica_reservas r 
on c.id = r.cliente_id
group by c.id, c.nombre
having count(r.id) > 1
order by count(r.id) desc;

-- Mostrar el número de reservas agrupadas por ciudad del cliente.


-- Mostrar los hoteles que disponen de habitaciones tipo Suite.
select o.nombre, a.tipo from practica_hoteles o inner join practica_habitaciones a
on o.id = a.hotel_id
where a.tipo = 'Suite';

-- Calcular el precio medio de las habitaciones por tipo.
select tipo, avg(precio_noche) from practica_habitaciones
group by tipo
order by avg(precio_noche);

-- Mostrar los clientes cuya reserva más larga supera las 4 noches.
select c.nombre, MAX(DATEDIFF(r.fecha_checkout, r.fecha_checkin)) as reservaLarga from practica_clientes c
inner join practica_reservas r on c.id = r.cliente_id
group by c.id, c.nombre
having max(DATEDIFF(r.fecha_checkout, r.fecha_checkin)) > 4;

-- Mostrar los clientes que han reservado en más de un hotel distinto. (incompleto)
select * from practica_clientes c inner join practica_reservas r
on c.id = r.cliente_id

;

-- Mostrar el hotel que tiene la habitación más cara de toda la cadena.
select o.nombre, a.numero, a.tipo, a.precio_noche from practica_hoteles o inner join practica_habitaciones a
on o.id = a.hotel_id 
order by a.precio_noche desc limit 1;

-- Calcular el ingreso medio por reserva.

-- Mostrar los hoteles cuyo precio medio de habitación es superior a 120 €.
select h.nombre, avg(a.precio_noche) from practica_hoteles o inner  join practica_habitaciones a
on o.id = a.hotel_id
group by h.id, h.nombre
having avg(a.precio_noche) >120;

-- Mostrar el total de reservas por ciudad del hotel 
select h.ciudad, COUNT(r.id) from practica_hoteles h
inner join practica_habitaciones hab on h.id = hab.hotel_id
inner join practica_reservas r on hab.id = r.habitacion_id
group by h.ciudad
order by COUNT(r.id)  desc;

-- Mostrar los clientes que han reservado habitaciones tipo Suite.
select c.nombre, h.tipo from practica_clientes c inner join practica_reservas r
on c.id = r.cliente_id
inner join practica_habitaciones h
on h.id = r.habitacion_id
where h.tipo = 'Suite';

-- Mostrar las reservas cuya duración es mayor que la duración media de todas las reservas.

-- Mostrar el número de reservas agrupadas por año.

-- Mostrar el mes con mayor número de reservas.

-- Mostrar los ingresos totales agrupados por año.

-- Mostrar los clientes que han realizado reservas en años distintos.
select c.nombre, COUNT(distinct year(r.fecha_checkin)) from practica_clientes c
inner join practica_reservas r on c.id = r.cliente_id
group by c.id, c.nombre
having count(distinct year(r.fecha_checkin)) > 1;

-- Mostrar los hoteles que no tienen reservas registradas.
select h.nombre, r.id from practica_reservas r left join practica_habitaciones a
on r.habitacion_id = a.id
right join practica_hoteles h
on h.id = a.hotel_id
where r.id is null;