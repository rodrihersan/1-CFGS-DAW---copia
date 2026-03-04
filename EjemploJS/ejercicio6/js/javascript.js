function holaMundo() {

    let dato = prompt("Introduzca su nombre por favor");

    if (dato == null || dato == "") {

        console.error("No se ha introducido valor");
        alert("No se ha introducido valor");

    } else {

        let confirmacion = confirm("¿Tu nombre es " + dato + "?");

        if (confirmacion === true) {
            console.log("El nombre es correcto");
            alert("Bienvenido");
        } else {
            console.warn("No se sabe su nombre");
        }
    }
}

function mostrarVariables() {

    alert('Variable1: ' + variable1);

    variable2 = null;
    alert('Variable2: ' + variable2);

    var variable1 = 34;
    alert('Variable1: ' + variable1);

    variable3 = 15.9;
    alert('variable1 * variable3: ' + (variable1 * variable3));

    variable3 = "ahora soy un texto";
    alert('Variable3: ' + variable3);

}

function comprobarOperadores() {

    var var1 = "hola";
    var var2 = "adios";

    alert(
        'var1 = "hola", var2 = "adios"\n\n' +
        'var1 == var2: '  + (var1 == var2)  + '\n' +
        'var1 != var2: '  + (var1 != var2)  + '\n' +
        'var1 < var2: '   + (var1 < var2)   + '\n' +
        'var1 > var2: '   + (var1 > var2)   + '\n' +
        'var1 <= var2: '  + (var1 <= var2)  + '\n' +
        'var1 >= var2: '  + (var1 >= var2)
    );
    // Las cadenas se comparan alfabéticamente
    // "hola" > "adios" porque "h" va después de "a"

    var var3 = 5;
    var var4 = "5";

    alert(
        'var3 = 5 (number), var4 = "5" (string)\n\n' +
        'var3 == var4: '  + (var3 == var4)  + '\n' +
        'var3 === var4: ' + (var3 === var4)
    );

    var var5 = 10;
    var var6 = 3;
    var var7 = 8;

    alert(
        'var5 = 10, var6 = 3, var7 = 8\n\n' +
        'var5 < var6: '   + (var5 < var6)   + '\n' +
        'var5 > var6: '   + (var5 > var6)   + '\n' +
        'var5 <= var7: '  + (var5 <= var7)  + '\n' +
        'var5 >= var7: '  + (var5 >= var7)
    );

    var7 = !true;
    alert('var7 = !true → var7: ' + var7);

}

function gestionarArray() {

    let array = [];
    let continuar = true;
    /*while(continuar){
        let numero = parseInt(prompt("Introduce un número (positivo, negativo o 0). Escribe una cadena de texto para terminar:"));
        let nombre = prompt("Introduza su nombre");

        if (!Number.isNaN(numero) || numero === null) {
            console.log("Ejecución terminada. Contenido final del array:");
            console.log(array);
            alert("Programa terminado. Revisa la consola para ver el array.");
            break;
        }else{
            
        }
    }*/
    while (true) {

        let numero = parseInt(prompt("Introduce un número (positivo, negativo o 0). Escribe una cadena de texto para terminar:"));
        
        if (!Number.isNaN(numero) || numero === null) {
            console.log("Ejecución terminada. Contenido final del array:");
            console.log(array);
            alert("Programa terminado. Revisa la consola para ver el array.");
            break;
        }

        numero = Number(numero);

        var nombre = prompt("Introduce un nombre de persona:");

        var confirmacion = confirm("¿Deseas AÑADIR el valor?" + "Número: " + numero + "Nombre: " + nombre);

        if (confirmacion) {

            if (numero >= 0) {
                array[numero] = nombre;
                console.log('Añadido "' + nombre + '" en la posición ' + numero);
            } else {
                array.push(nombre);
                console.log('Añadido "' + nombre + '" al final del array');
            }

        } else {

            if (numero >= 0) {
                console.log('Eliminado el elemento en la posición ' + numero + ': ' + array[numero]);
                array.splice(numero, 1);
            } else {
                console.log('Eliminado el primer elemento: ' + array[0]);
                array.shift();
            }
        }
        console.log("Estado actual del array:", array);
    }
}