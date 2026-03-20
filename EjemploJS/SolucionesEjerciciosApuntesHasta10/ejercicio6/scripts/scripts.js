function rellenarArray() {
    let arrayNombres = [];
    let salir = false;
    do {
        let numero = Number(prompt("Introduzca un número \n (positivo, negativo o 0)"));
        if (isNaN(numero)) {
            salir = true;
        } else {
            let nombrePersona = prompt("Introduzca un nombre de persona");
            let anadir = confirm("¿Desea guardar el nombre introducido?");
            if (anadir) {
                if (numero >= 0) {
                    arrayNombres[numero] = nombrePersona;
                } else {
                    arrayNombres.push(nombrePersona);
                }
            } else {
                if (numero >= 0) {
                    arrayNombres[numero] = "";
                } else {
                    arrayNombres[0] = "";
                }
            }
        }
    } while(!salir);
    console.log(arrayNombres);
}