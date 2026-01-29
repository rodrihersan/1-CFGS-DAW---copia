
CREATE TABLE clientes(
	id_cliente INT auto_increment PRIMARY KEY,
    dni_cliente varchar(10) NOT NULL ,
	nombre_cliente varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    fecha_nacimiento date NOT NULL,
    genero char NULL,
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
    UNIQUE(dni_cliente),
    UNIQUE(email)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla clientes';

CREATE TABLE productos(
	id_producto INT auto_increment PRIMARY KEY,
    nombre_producto varchar(50) NOT NULL,
    pvp decimal (6,2) NOT NULL,
    CHECK (pvp > 0)
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla productos';

CREATE TABLE proveedor(
	id_proveedor INT auto_increment PRIMARY KEY,
    nombre_proveedor varchar(50) NOT NULL,
    direccion varchar(50)
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla proveedor';

CREATE TABLE producto_proveedor (
	id_producto_proveedor INT auto_increment PRIMARY KEY,
	id_producto INT not null,
    id_proveedor INT not null,
    precio decimal (6,2) not null,
    check (precio > 0),
    UNIQUE (id_producto, id_proveedor),
    FOREIGN KEY (id_producto) references productos (id_producto) ON DELETE CASCADE,
    FOREIGN KEY (id_proveedor) references proveedor (id_proveedor) ON DELETE CASCADE
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla producto_proveedor';

CREATE TABLE almacen(
	id_almacen INT auto_increment primary key,
    nombre varchar(50) not null
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla almacen';

CREATE TABLE stock(
	id_stock INT auto_increment PRIMARY KEY,
	id_producto_proveedor INT NOT NULL,
    id_almacen INT NOT NULL,
    cantidad INT NOT NULL,
    check (cantidad >= 0),
	FOREIGN KEY (id_producto_proveedor) references producto_proveedor (id_producto_proveedor) ON DELETE CASCADE,
    FOREIGN KEY (id_almacen) references almacen (id_almacen) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla stock';

CREATE TABLE pedidos (
	id_pedido INT auto_increment primary key,
    fecha datetime,
    numero_seguimiento varchar(50)
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla pedidos';

CREATE TABLE producto_pedidos (
	id_productos_pedidos INT auto_increment primary key,
    id_producto_proveedor INT NOT NULL,
	id_pedido INT NOT NULL,
    cantidad INT not null,
    check (cantidad >= 0),
    FOREIGN KEY (id_pedido) references pedidos (id_pedido) ON DELETE CASCADE,
    FOREIGN KEY (id_producto_proveedor) references producto_proveedor (id_producto_proveedor) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla producto_pedidos';

CREATE TABLE cupones(
	id_cupon INT auto_increment primary key,
    tipo varchar(10) not null,
    id_producto INT,
    codigo varchar(50) not null unique,
    descuento decimal(6,2) not null,
    check (descuento >= 0 AND descuento <=100),
    fecha_inicio datetime,
    fecha_fin datetime,
    check (fecha_fin > fecha_inicio)
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla cupones';

CREATE TABLE compras(
	id_compra INT auto_increment primary key,
    id_cliente INT not null,
    id_cupon INT,
    fecha datetime,
    precio decimal(6,2) not null,
    check(precio > 0),
    /*create_at DATETIME DEFAULT current_timestamp, /*CAMPO DE AUDITORIA -> EN ESTE CASO ES CUANDO SE HA CREADO EL REGISTRO*/
    /*update_at DATETIME DEFAULT on update current_timestamp,*/
    FOREIGN KEY (id_cliente) references clientes (id_cliente) ON DELETE CASCADE,
    FOREIGN KEY (id_cupon) references cupones (id_cupon) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla compras';

CREATE TABLE productos_compras(
	id_productos_compras INT auto_increment primary key,
	id_compra INT NOT NULL,
    id_producto_proveedor INT NOT NULL,
    cantidad INT NOT NULL,
    precio decimal(6,2) not null,
    check (precio > 0),
    check (cantidad > 0),
    FOREIGN KEY (id_compra) references compras (id_compra) ON DELETE CASCADE,
    FOREIGN KEY (id_producto_proveedor) references producto_proveedor (id_producto_proveedor) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='tabla productos_compras';

