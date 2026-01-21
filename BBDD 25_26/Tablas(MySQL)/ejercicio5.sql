Create database if not exists CentroSalud;
Use CentroSalud;

Create table Medico(
	DNI_medico varchar(10) PRIMARY KEY,
    Nombre_med varchar(30) NOT NULL,
    Anio_colegio Int NOT NULL DEFAULT 1900,
	Direccion varchar(50)
);

Create table Paciente(
	Dni_paciente varchar(10) PRIMARY KEY,
    DNI_medico varchar(10),
    Nombre_pac varchar(30) NOT NULL,
    Direccion varchar(50),
    Telefono varchar(10),
    foreign key(DNI_medico) references Medico(DNI_medico)
);

Create table Salas(
	Id_sala int PRIMARY KEY,
    ubicacion varchar(50) NOT NULL
);

Create table Trabaja(
	DNI_medico varchar(10),
    Id_sala int,
    Horario varchar(40) NOT NULL,
    primary key(DNI_medico, Id_sala),
    foreign key(DNI_medico) references Medico(DNI_medico) ON DELETE CASCADE,
    foreign key(Id_sala) references Salas(Id_sala) ON UPDATE CASCADE ON DELETE NO ACTION
);