function mostrarMeses() {
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  for (let index = 0; index < meses.length; index++) {
    console.log(meses[index]);
  }
}

function calcularFactorial() {
    let factorial = 1;
    let numero = Number(prompt("Introduzca un número"));
    if (!isNaN(numero)) {
        for (let i = 1; i <= numero; i++)
        {
            factorial = factorial * i;   
        }
        alert("El factorial de " + numero + "es " + factorial);
    } else {
        alert("Debe introducir un valor numérico");
    }
}

function recomendacionesNetflix() {
    let edad = Number(prompt("¿Cuántos años tiene?"));
    let recomendacion = "";
    if (edad <= 6) {
        recomendacion = "Patrulla Canina";
    } else if ((7 <= edad) && (edad <= 13 )) {
        recomendacion = "Alexa y Katie";
    } else if ((13 < edad) && (edad <= 18 )) {
        recomendacion = "Anne with an E";
    } else if ((19 <= edad) && (edad <= 35 )) {
        recomendacion = "Stranger things";
    } else {
        recomendacion = "Sherlock";
    }
    alert("Recomendamos ver " + recomendacion);
}

function bucleNumerico() {
    let numero = 0;
    do{
        numero = Number(prompt("Introduzca un número, por favor"));
        console.log(numero);
    } while((numero <45) || (numero > 72));
}