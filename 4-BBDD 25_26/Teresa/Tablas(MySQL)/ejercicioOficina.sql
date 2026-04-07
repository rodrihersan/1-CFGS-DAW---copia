# Ejecuta el siguiente script.
# Busca busca los errores y corrígelos

drop database if exists oficina_mal;
create database oficina_mal;
use oficina_mal;

CREATE TABLE habitacion (
   id_hotel int(11) NOT NULL,
   id_habitacion int(11) NOT NULL,
   primary key(id_hotel, id_habitacion)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
  CREATE TABLE puesto (
   id_puesto int(11) NOT NULL,
   descr varchar(30) DEFAULT NULL,
   PRIMARY KEY (id_puesto)
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE empleado (
   dni varchar(10) NOT NULL,
   nss int(11) DEFAULT NULL,
   id_puesto int(11) DEFAULT NULL,
   id_hotel int(11),
   id_habitacion int,
   PRIMARY KEY (dni),
   CONSTRAINT empleado_ibfk_2 FOREIGN KEY (id_puesto) REFERENCES puesto (id_puesto) ON DELETE SET NULL ON UPDATE CASCADE,
   CONSTRAINT empleado_ibfk_3 FOREIGN KEY (id_hotel, id_habitacion) REFERENCES habitacion (id_hotel, id_habitacion) on delete set null on update cascade
 ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
 insert into habitacion values(1,1);

 insert into habitacion values(1,2);

 insert into habitacion values(1,3);

 insert into habitacion values(1,4);

 insert into habitacion values(2,1);
 
 insert into habitacion values(2,2);

select * from puesto;
 insert into puesto values (1,'programador');

 insert into puesto values(2,'analista');

 insert into puesto values(3,'jefe');

select * from empleado;
 insert into empleado values ('123456k',12345,1,1,1);

 insert into empleado values ('123457k',12346,1,1,2);

 insert into empleado values ('123458k',12347,2,1,3);

 insert into empleado values ('123459k',12348,2,1,1);

 insert into empleado values ('123460k',12349,1,1,2);

 insert into empleado values ('123461k',12350,3,1,3); 

 insert into empleado values ('123462k',12351,3,2,1);

 insert into empleado values ('123463k',12352,1,1,1);

 insert into empleado values ('123464k',12353,2,1,4); 

 insert into empleado values ('123465k',12354,1,1,4);
 