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