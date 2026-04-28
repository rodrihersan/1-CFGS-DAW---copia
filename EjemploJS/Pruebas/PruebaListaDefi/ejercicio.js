function iniciar() {
    let seccion = document.createElement("div"); // crea el div contenedor
    seccion.setAttribute("id", "seccionLista"); // le asigna el id

    let listaDef = document.createElement("dl"); // crea la lista de definiciones

    let terminos = ["Caravana", "Autocaravana"]; // array con los términos
    let definiciones = [
        "Vehículo remolcado que se usa como vivienda temporal durante viajes.",
        "Vehículo de motor que incluye zona de habitáculo para vivir durante viajes."
    ]; // array con las definiciones

    for (let i = 0; i < terminos.length; i++) { // recorre los términos
        let dt = document.createElement("dt"); // crea el término
        dt.innerText = terminos[i]; // le pone el texto
        dt.setAttribute("class", "terminoLista"); // le aplica el estilo

        let dd = document.createElement("dd"); // crea la definición
        dd.innerText = definiciones[i]; // le pone el texto
        dd.setAttribute("class", "definicionLista"); // le aplica el estilo

        listaDef.appendChild(dt); // añade el término a la lista
        listaDef.appendChild(dd); // añade la definición a la lista
    }

    seccion.appendChild(listaDef); // mete la lista en el div
    document.body.appendChild(seccion); // añade el div al final del body

    let pregunta = document.getElementById("pregunta"); // selecciona el párrafo pregunta
    pregunta.setAttribute("onmouseover", "cambiarEstilos();"); // le asigna el evento mouseover
}

/*
EJEMPLO PIDIENDO LA DEFINICION AL USUARIO 

function iniciar() {
    let seccion = document.createElement("div"); // crea el div contenedor
    seccion.setAttribute("id", "seccionLista"); // le asigna el id

    let listaDef = document.createElement("dl"); // crea la lista de definiciones

    let terminos = ["Caravana", "Autocaravana"]; // array con los términos fijos

    for (let i = 0; i < terminos.length; i++) { // recorre los términos
        let dt = document.createElement("dt"); // crea el término
        dt.innerText = terminos[i]; // le pone el texto fijo
        dt.setAttribute("class", "terminoLista"); // le aplica el estilo

        let dd = document.createElement("dd"); // crea la definición
        dd.innerText = prompt("Introduce la definición de " + terminos[i] + ":"); // pide la definición al usuario
        dd.setAttribute("class", "definicionLista"); // le aplica el estilo

        listaDef.appendChild(dt); // añade el término a la lista
        listaDef.appendChild(dd); // añade la definición a la lista
    }

    seccion.appendChild(listaDef); // mete la lista en el div
    document.body.appendChild(seccion); // añade el div al final del body

    let pregunta = document.getElementById("pregunta"); // selecciona el párrafo pregunta
    pregunta.setAttribute("onmouseover", "cambiarEstilos();"); // le asigna el evento mouseover
}

*/



function comprobarChecks() {
    let naturaleza = document.getElementById("naturaleza").checked; // comprueba si naturaleza está marcado
    let ciudad = document.getElementById("ciudad").checked; // comprueba si ciudad está marcado
    let espacio = document.getElementById("espacio").checked; // comprueba si espacio está marcado

    let resultado = document.getElementById("resultado"); // selecciona el div resultado

    if (!naturaleza && !ciudad && !espacio) { // si no hay ningún check marcado
        resultado.innerText = ""; // borra el texto
        resultado.removeAttribute("class"); // quita la clase
        return; // sale de la función
    }

    resultado.setAttribute("class", "textoResultado"); // aplica el estilo
    resultado.innerText = "Ponte en contacto con nosotros para mayor información. Estamos en C/Hierro nº4 Salamanca o en el teléfono 923654321"; // muestra el texto

    if (naturaleza && ciudad) { // si están marcados naturaleza y ciudad
        confirm("Aclárate!!!!");
    } else if (naturaleza) { // si solo está marcado naturaleza
        confirm("Alquila una autocaravana");
    } else if (ciudad) { // si solo está marcado ciudad
        confirm("No es para ti");
    }
}

function cambiarEstilos() {
    let info1 = document.getElementById("info1"); // selecciona info1
    let info2 = document.getElementById("info2"); // selecciona info2

    info1.classList.add("bordeRedondeado"); // redondea el borde de info1
    info2.classList.add("bordeRedondeado"); // redondea el borde de info2
    info1.classList.add("textoRojoFondoBlanco"); // cambia texto y fondo de info1

    let pregunta = document.getElementById("pregunta"); // selecciona el párrafo
    pregunta.removeAttribute("onmouseover"); // elimina el evento para que no se repita
}