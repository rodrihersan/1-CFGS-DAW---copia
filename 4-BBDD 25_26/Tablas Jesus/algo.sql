-- APP VENTAS

-- Ranking de Usuarios con mas ventas (examen)
select usuario_id, count (usuario_id) from app_ventas group by usuario_id order by count(usuario_id) desc;

-- Igual que arriba pero cambiamos el campo de la tabla por total para entenderlo algo mejor (semantica) y ademas con el limit sacamos el top 3.
select usuario_id, count (usuario_id) total from app_ventas group by usuario_id order by total desc limit 3; 

-- usuario con mayor importe total vendido 
select usuario_id, SUM(importe) as total from app_ventas group by usuario_id order by total limit 1;

-- ventas cuyo importe sea mayor que la media
select * from app_ventas where importe  > 
(
	select AVG(importe) from app_ventas
);

-- usuarios con mas ventas que la media
select usuario_id, count (*)
from app_ventas 
group by usuario_id 
having count(*) >(
select AVG(total) from
	(
		select count(usuario_id) as total
		from app_ventas
		group by usuario_id
    ) t
);

-- usuarios que tengan mas de dos ventas
select usuario_id, count(*) as total
from app_ventas group by usuario_id
having total > 2 and usuario_id != 1;

-- la misma con where
select usuario_id, count(*) as total
from app_ventas 
where usuario_id != 1
group by usuario_id
having total > 2 and usuario_id != 1;