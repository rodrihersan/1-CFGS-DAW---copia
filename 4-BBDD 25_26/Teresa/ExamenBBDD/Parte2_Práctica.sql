# BBDD para modificar

drop database if exists bibliotecas ;

create database bibliotecas;

use bibliotecas;

create table editoriales
(nombre varchar(25) primary key,
direccion varchar(50));
create table usuario(
dni varchar(10) primary key,
nombre varchar(25),
edad int,
telefono int);

create table estanteria(
id_estaneria int,
ubicacion varchar(50));
create table autor(
id_autor int primary key,
nombre varchar (25),
nacionaliad varchar (30),
direccion varchar(35)
);

create table libro (
isbn varchar (15),
titulo varchar(40),
tema varchar(40),
nombre_editorial varchar(25),
dni_usuario varchar(10) unique,
id_estanteria int ,
letra char(1),
foreign key (nombre_editorial) references editoriales(nombre),
foreign key (dni_usuario) references usuario(dni)
);
create table escribe
(id_autor int,
isbn varchar(15)
); 



ALTER TABLE usuarios ADD id_usuario INT;

ALTER TABLE usuario DROP dni;
ALTER TABLE libros DROP foreign key dni_usuario; 

ALTER TABLE libro CHANGE COLUMN dni_usuario id_usuario int;

ALTER TABLE usuario DROP primary key;

ALTER TABLE usuario ADD PRIMARY KEY (id_usuario, autoincrement);

ALTER TABLE usuario ADD UNIQUE KEY (dni);

ALTER TABLE libros ADD foreign key (id_usuario) references usuario (id_usuario) on delete set null on update cascade;

RENAME TABLE escribe TO escribe_libros;

ALTER TABLE libro ADD PRIMARY KEY (titulo , isbn );

ALTER TABLE usuarios COMMENT "Con el objetivo, de en un futuro. poder borrar el DNI del usuario de la base de datos hemos cambiado el DNI del usuario por oro campo id_usuario";






