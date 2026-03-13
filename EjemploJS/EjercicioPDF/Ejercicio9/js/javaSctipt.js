function gestionarNombres(){
    let colores = [];
    let contadorColores = 0;

    do{
        let color = prompt("Introduzca un color");
        contadorColores++;
        if(color === "rojo")
            break;      /*De aqui salta directamente a la linea 5 (empieza el bucle de nuevo)*/
        if (color === "verde")
            continue;           /*De aqui salta directamente a la linea 16 ( y empieza el bucle de nuevo)*/

        color.push(color);      /*Los guarda en el array (colores) y los añade al contador*/
    }while(true);

    alert(`Se han introducido ${contadorColores} y se han guardado ${colores}`);
}

gestionarNombres();