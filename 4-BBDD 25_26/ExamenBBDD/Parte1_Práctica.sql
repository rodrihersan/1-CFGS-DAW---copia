drop database if exists elecciones_municipales;

create database elecciones_municipales;
use elecciones_municipales;

create table Municipio(
	Cod_municipio int auto_increment,
    Nombre varchar(25) not null,
    Provincia varchar(25) not null,
    Num_censados int,
    Tipo enum ('cieudad', 'pueblo'),
    primary key (Cod_municipio) 
) ENGINE = innoDB charset= latin1 COMMENT= "tala  Municipio";

create table Colegios_electorales(
	Cod_municipio int,
    Cod_colegio int,
    Direccion varchar(50),
    nombre varchar(50) not null,
    primary key (Cod_municipio,Cod_colegio),
    foreign key (Cod_municipio) references Municipio (Cod_municipio) on delete no action on update cascade
) ENGINE = innoDB charset= latin1 COMMENT= "tala  Colegios_electorales";

create table Mesa_electoral(
	Distrito int,
	Seccion int,
    Letra char(1),
    Cod_municipio int,
    Cod_colegio int,
    primary key (Distrito,Seccion,Letra),
    foreign key (Cod_municipio,Cod_colegio) references colegios_electorales (Cod_municipio,Cod_colegio) On delete set null on update cascade
) ENGINE = innoDB charset= latin1 COMMENT= "tala  Mesa_electoral";

create table partidos_politicos(
	siglas char (4) primary key,
	id_partido int unique,
	nombre varchar(30),
	direccion varchar(30),
	Localidad varchar(30),
	Fecha_alta date
)ENGINE = innoDB charset= latin1 COMMENT= "tala  partidos_politicos";

create table politicos (
	dni varchar(10) primary key,
	partido char(4),
	primer_apellido varchar (25),
	segundo_apellido varchar (25),
	Edad int,
	foreign key (partido) references partidos_politicos(siglas)
)ENGINE = innoDB charset= latin1 COMMENT= "tala  politicos";

create table Candidato(
	dni varchar(10),
    Puesto varchar(50) not null,
    municipio int,
    primary key (dni),
    foreign key (dni) references politicos(dni) on delete no action on update cascade,
    foreign key (municipio) references Municipio (Cod_municipio) on delete set null on update cascade
)ENGINE = innoDB charset= latin1 COMMENT= "tala  Candidato";

create table Elegido(
	dni varchar(10),
    Cargo varchar(50) not null,
    municipio int,
    primary key (dni),
    foreign key (dni) references politicos(dni) on delete no action on update cascade,
    foreign key (municipio) references Municipio (Cod_municipio) on delete set null on update cascade
)ENGINE = innoDB charset= latin1 COMMENT= "tala  Elegido";

create table Obtiene_votos(
	Distrito int,
    Seccion int,
    Letra char(1),
    siglas char(4),
    Num_votos int NOT NULL,
    primary key (Distrito,Seccion,Letra,siglas),
    foreign key (siglas) references partidos_politicos (siglas) on delete cascade on update cascade,
    foreign key (municipio) references Municipio (Cod_municipio) on delete set null on update cascade
)ENGINE = innoDB charset= latin1 COMMENT= "tala  Obtiene_votos";

create table Resultados_municipio(
	Cod_municipio int,	
    siglas char(4),
    Por_votos Decimal (5,2),
    Num_concejales int default 0,
    NUm_votos int,
    primary key (Cod_municipio,siglas),
    foreign key (Cod_municipio) references Municipio (Cod_municipio) on delete cascade on update cascade,
    foreign key (siglas) references partidos_politicos  (siglas) on delete cascade on update cascade
)ENGINE = innoDB charset= latin1 COMMENT= "tala  Resultados_municipio";

