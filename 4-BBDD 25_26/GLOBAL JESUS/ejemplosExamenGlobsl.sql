-- funcion que devuelva el saldo actual de descuentos acumulado de un cliente777

DELIMITER //
create function descuentos (v_id_cliente INT)
RETURNS INT
BEGIN
	DECLARE total INT;
	SELECT SUM(VALOR) INTO total FROM CUPONES WHERE id_cliente = v_id_cliente AND tipo='descuento_directo' AND disponible = 1;
    Return total
END //
delimiter;

-- crea una funcion que determine la categoria del cleinte dentro del programa de fidelizacion
DELIMITER //

create function categoria_cliente (v_id_cliente INT)
RETURNS varchar(32)
BEGIN	
	declare total int;
    select SUM(total) into total from compras where id_cliente = v_id_cliente AND fecha_compra > current_date - 90,
    IF total < 90 THEN 
    return 'normal';
    
    elseif total >=90 AND total <500 then return 'VIP';
    
    else 
    return 'oro';
    END IF
    return categoria
    END //
    delimiter;
    
    -- crear un procedimiento almacenado que genere los cheques de ahorro
DELIMITER// 
CREATE PROCEDURE crear_cupones()
BEGIN
	INSERT INTO cupones (valor, id_cliente, f_inicio, f_fin, codigo, tipo) 
    