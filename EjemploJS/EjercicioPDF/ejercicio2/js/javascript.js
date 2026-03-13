function holaMundo() {

    let dato = prompt("Introduzca su nombre por favor");

    if (dato === null || dato.trim() === "") {

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