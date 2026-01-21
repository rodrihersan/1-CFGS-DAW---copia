create database inmobiliaria;
use inmobiliaria;

CREATE TABLE personas (
Cod_persona int auto_increment,
Dni_persona varchar(10) UNIQUE,
Nombre varchar(50) NOT NULL,
Telefono int default 000000000,
primary key(Cod_persona)
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla personas' auto_increment=1000;


CREATE TABLE clientes (
Cod_persona int primary key,
Tipo_cliente enum('Vip', 'normal', 'inmobiliaria'),
foreign key(Cod_persona) references personas(Cod_persona) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla clientes';

CREATE TABLE trabajadores (
Cod_persona int primary key,
Teléfono_trabajo int NOT NULL  default 000000000,
foreign key(Cod_persona) references personas(Cod_persona) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla trabajadores';

CREATE TABLE  inmueble (
Id_inmueble int primary key auto_increment,
direccion varchar(50),
Precio_act decimal(12,2) default 0
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla inmueble';

CREATE TABLE pisos (
Id_inmueble int primary key,
jardin boolean default false,
tipo enum('chalet', 'apartamento', 'duplex', 'casa de pueblo'),
foreign key(Id_inmueble) references inmueble(Id_inmueble) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla pisos';

CREATE TABLE locales(
Id_inmueble int primary key,
bano boolean ,
foreign key(Id_inmueble) references inmueble(Id_inmueble) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla locales';

CREATE TABLE garajes(
Id_inmueble int primary key,
Numero int default 0,
planta int default 0,
foreign key(Id_inmueble) references inmueble(Id_inmueble) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla garajes';

CREATE TABLE alquiler(
Id_inmueble int,
Num_alquiler int,
Cod_cliente int,
Cod_vendedor int,
primary key(Id_inmueble, Num_alquiler),
foreign key(Id_inmueble) references inmueble(Id_inmueble) On delete cascade on update cascade,
foreign key(Cod_cliente) references clientes(Cod_persona) On delete cascade on update cascade,
foreign key(Cod_vendedor) references trabajadores(Cod_persona) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla alquiler';

CREATE TABLE compra(
Id_inmueble int,
Num_compra int,
fecha date,
Valor_compra decimal(12,2) NOT NULL,
primary key (Id_inmueble, Num_compra),
foreign key(Id_inmueble) references inmueble(Id_inmueble) On delete cascade on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla compra';


CREATE TABLE Realizar_compra(
Id_inmueble int,
Num_compra int,
Cod_persona int,
primary key(Id_inmueble,Num_compra,Cod_persona),
foreign key(Id_inmueble, Num_compra) references compra(Id_inmueble, Num_compra) on update no action on delete cascade,
foreign key(Cod_persona) references personas(Cod_persona) on delete no action on update cascade
)ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tabla Realizar_compra';