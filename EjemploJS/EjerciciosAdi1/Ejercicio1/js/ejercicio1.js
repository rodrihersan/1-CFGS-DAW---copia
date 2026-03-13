//-------------------------EJERCICIO 1------------------------------------------------
function bienvenida() {
    let dato = prompt("Introduzca su nombre por favor");

    if (dato === null || dato.trim() === "") {

        console.error("No se ha introducido valor");
        alert("No se ha introducido valor");

    } else {
        alert("Bienvenido");
    }
}


//-------------------------EJERCICIO 2------------------------------------------------

function edad() {
    let edad = Number(prompt("Introduzca su edad por favor"));

    if (isNaN(edad)) {

        console.error("No se ha introducido valor");
        alert("No se ha introducido valor");

    } else {
        if (edad > 0 && edad < 18){
            alert("Eres menor de edad (menos de 18 años)");
        } else if (edad >= 18){
            alert("Eres mayor de edad (mas de 18 años)");
        }else{
            alert("Edad negativa");        
        }
    }
}