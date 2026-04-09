-- ejercicio pratico

-- drop database if exists ejercicio_practico ;

-- create database ejercicio_practico;

-- use ejercicio_practico;

-- creacion tablas

DROP TABLE IF EXISTS t_pedidos_detalles;
DROP TABLE IF EXISTS t_pedidos;
DROP TABLE IF EXISTS t_productos;
DROP TABLE IF EXISTS t_clientes;
DROP TABLE IF EXISTS carrito;


create table t_clientes(
	id int auto_increment primary key,
	nombre varchar(100) not null,
	email varchar(100),
    ciudad varchar(100)
);

create table t_productos(
	id int auto_increment primary key,
    nombre varchar (100),
    precio decimal(10,2),
    stock int
);

create table t_pedidos(
	id int auto_increment primary key,
    cliente_id int,
    fecha date,
    total decimal(10,2),
    foreign key (cliente_id) references t_clientes(id)
);

create table t_pedidos_detalles (
	id int auto_increment primary key,
    pedido_id int,
    producto_id int,
    cantidad int,
    precio_unitario decimal (10,2),
    foreign key (pedido_id) references t_pedidos(id),
    foreign key (producto_id) references t_productos(id)
);

create table t_carrito(
	id int auto_increment primary key,
    cliente_id int,
    producto_id int,
    cantidad int,
    foreign key (cliente_id) references t_clientes(id),
    foreign key (producto_id) references t_productos(id)
);

-- insert de datos
insert into t_clientes (nombre, email, ciudad) values ('juan','juan@dominio.com','Salamanca');
insert into t_clientes (nombre, email, ciudad) values ('pepe', 'pepe@dominio.com','Madrid');
insert into t_clientes (nombre, email, ciudad) values ('ana','ana@dominio.com','Salamanca');

insert into t_productos (nombre, precio, stock) values ('Teclado',10.50,5);
insert into t_productos (nombre, precio, stock) values ('Raton',20.50,7);
insert into t_productos (nombre, precio, stock) values ('Ipad',399,3);

insert into t_pedidos (cliente_id, fecha) values (1, current_date());
insert into t_pedidos (cliente_id, fecha) values (2, current_date());


insert into t_carrito (cliente_id, producto_id, cantidad) values (1,1,1);
insert into t_carrito (cliente_id, producto_id, cantidad) values (1,2,2);




-- primer usuario (juan) registremos su pedido que ha hecho compra de teclado raton ipad 
insert into t_pedidos_detalles (pedido_id, producto_id, cantidad, precio_unitario) values (1, 1, 1, 10.50); 
insert into t_pedidos_detalles (pedido_id, producto_id, cantidad, precio_unitario) values (1, 2, 1, 20.50); 
insert into t_pedidos_detalles (pedido_id, producto_id, cantidad, precio_unitario) values (1, 3, 1, 399); 
insert into t_pedidos_detalles (pedido_id, producto_id, cantidad, precio_unitario) values (2, 3, 2, 399); 




-- indice tabla productos (nombre) y clientes (email)
create index clientes_email on t_clientes (email);
create index productos_nombre on t_productos(nombre);





-- actualizar el total del pedido (con la linea pedido detalles)
update t_pedidos pe SET total = (
	select SUM(cantidad * precio_unitario) from t_pedidos_detalles 
    where pedido_id = 1
)
where id = 1;

update t_productos set stock = stock - 1 where id = 1;
update t_productos set stock = stock - 1 where id = 2;
update t_productos set stock = stock - 1 where id = 3;

-- nombre cliente fecha pedido total pedido 
create view v_informe as select c.nombre, p.fecha, p.total from t_clientes as c
inner join t_pedidos as p
on c.id = p.cliente_id;

select * from v_informe;

delete from t_clientes where id = 3;


delimiter // 
create procedure sp_mostrar_numero(in p_numero int)
begin 
	select concat ('El numero que has introducido es: ', p_numero) as mensaje;
end//
delimiter ;

call sp_mostrar_numero(5);


-- procedimineto para que un numero diga si es par o impar 
delimiter //
create procedure sp_es_par(in p_numero int, out p_es_par bit)
begin
	if p_es_par % 2 = 0 then 
		set p_es_par = 1;
	else
		set p_es_par = 0;
	end if;
end//
delimiter ;

call sp_es_par(5, @resultado);
select @resultado;

DELIMITER //
create procedure sp_procesar_carrito(in client_id INT)
BEGIN 	

	-- check de que hay stock suficiente para procesar el pedido
    if exists(
    select * from t_carrito c
    inner join t_productos p 
    on c.producto_id = p.id
    where p.stock < c.cantidad
    ) then 
		signal sqlstate '45000'
		set message_text = 'Stock insuficiente para procesar el pedido';
    end if;
	-- creamos pedido
	INSERT INTO t_pedidos (cliente_id, fecha, total) values (client_id, CURRENT_DATE(), 0);
    
    -- Obtenemos el identificador del pedido que acabamos de crear
    set @pedido_id = last_insert_id(); -- examen, no viene en los apuntes
    
    -- creamos los detalles del pedido con la informacion que hay en el carrito
    insert into t_pedidos_detalles(pedido_id, producto_id, cantidad, precio_unitario)
    select @pedido_id, c.producto_id, c.cantidad, p.precio from t_carrito c
    inner join t_productos p 
    on c.producto_id = p.id
    where c.cliente_id = client_id;
    
    -- Actualizamos el stock restando la cantidad comprada
	update t_productos p
	inner join t_carrito c ON p.id = c.producto_id
	set p.stock = p.stock - c.cantidad
	where c.cliente_id = client_id;
    
    -- Actualizamos el total del pedido
    update t_pedidos p SET total = (
	select SUM(d.cantidad * d.precio_unitario) from t_pedidos_detalles d
    where d.pedido_id = @pedido_id
    )
    where p.id = @pedido_id;
    
    -- vaciar el carrito
    delete from t_carrito where cliente_id = client_id;
END//
DELIMITER ;

drop procedure sp_procesar_carrito
