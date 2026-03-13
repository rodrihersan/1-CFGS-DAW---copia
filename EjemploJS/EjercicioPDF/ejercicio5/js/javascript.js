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

    // --- BLOQUE 1: var1 y var2 como cadenas de texto ---
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
    // Nota: las cadenas se comparan alfabéticamente
    // "hola" > "adios" porque "h" va después de "a"

    // --- BLOQUE 2: var3 numérico vs var4 cadena de números ---
    var var3 = 5;
    var var4 = "5";

    alert(
        'var3 = 5 (number), var4 = "5" (string)\n\n' +
        'var3 == var4: '  + (var3 == var4)  + '\n' +
        // == convierte tipos antes de comparar → true
        'var3 === var4: ' + (var3 === var4)
        // === compara también el tipo → false
    );

    // --- BLOQUE 3: var5, var6 y var7 valores numéricos ---
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

    // Asignar a var7 !true y mostrarlo
    var7 = !true;
    alert('var7 = !true → var7: ' + var7); // false

}