function iniciar() {
    let seccion = document.createElement("div"); // crea el div contenedor de la lista
    seccion.setAttribute("id", "seccionLista"); // le asigna el id para darle estilo desde CSS

    let listaPrincipal = document.createElement("ul"); // crea la lista principal

    // Caravana
    let caravana = document.createElement("li"); // crea el elemento caravana
    caravana.innerText = "Caravana:"; // le pone el texto
    caravana.setAttribute("class", "tituloLista"); // le aplica el estilo de título

    let listaCaravana = document.createElement("ul"); // crea la sublista de caravana
    let itemsCaravana = ["Mantenimiento mecánico", "ITV pasada", "Seguro", "Parking", "Revisiones del conjunto", "Adaptar vehículo para remolcar"]; // array con los items
    for (let i = 0; i < itemsCaravana.length; i++) { // recorre el array
        let item = document.createElement("li"); // crea cada item
        item.innerText = itemsCaravana[i]; // le pone el texto
        item.setAttribute("class", "itemLista"); // le aplica el estilo de item
        listaCaravana.appendChild(item); // mete el item en la sublista
    }
    caravana.appendChild(listaCaravana); // mete la sublista dentro del li de caravana

    // Autocaravana
    let autocaravana = document.createElement("li"); // crea el elemento autocaravana
    autocaravana.innerText = "Autocaravana:"; // le pone el texto
    autocaravana.setAttribute("class", "tituloLista"); // le aplica el estilo de título

    let listaAutocaravana = document.createElement("ul"); // crea la sublista de autocaravana
    let itemsAutocaravana = ["Filtros (Aire, aceite, otros)", "Mantenimiento mecánico", "ITV pasada", "Impuesto de circulación.", "Seguro", "Vehículo o medio de transporte extra."]; // array con los items
    for (let i = 0; i < itemsAutocaravana.length; i++) { // recorre el array
        let item = document.createElement("li"); // crea cada item
        item.innerText = itemsAutocaravana[i]; // le pone el texto
        item.setAttribute("class", "itemLista"); // le aplica el estilo de item
        listaAutocaravana.appendChild(item); // mete el item en la sublista
    }
    autocaravana.appendChild(listaAutocaravana); // mete la sublista dentro del li de autocaravana

    listaPrincipal.appendChild(caravana); // mete caravana en la lista principal
    listaPrincipal.appendChild(autocaravana); // mete autocaravana en la lista principal
    seccion.appendChild(listaPrincipal); // mete la lista principal en el div contenedor
    document.body.appendChild(seccion); // añade el div al final del body

    let pregunta = document.getElementById("pregunta"); // selecciona el párrafo pregunta
    pregunta.setAttribute("onmouseover", "cambiarEstilos();"); // le asigna el evento mouseover
}

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

    resultado.setAttribute("class", "textoResultado"); // aplica el estilo al texto
    resultado.innerText = "Ponte en contacto con nosotros para mayor información. Estamos en C/Hierro nº4 Salamanca o en el teléfono 923654321"; // muestra el texto

    if (naturaleza && ciudad) { // si están marcados naturaleza y ciudad
        confirm("Aclárate!!!!"); 
    } else if (naturaleza) { // si solo está marcado naturaleza (con o sin espacio)
        confirm("Alquila una autocaravana");
    } else if (ciudad) { // si solo está marcado ciudad (con o sin espacio)
        confirm("No es para ti");
    }
}

function cambiarEstilos() {
    let info1 = document.getElementById("info1"); // selecciona el div info1
    let info2 = document.getElementById("info2"); // selecciona el div info2

    info1.classList.add("bordeRedondeado"); // redondea el borde de info1
    info2.classList.add("bordeRedondeado"); // redondea el borde de info2
    info1.classList.add("textoRojoFondoBlanco"); // pone texto rojo y fondo blanco en info1

    let pregunta = document.getElementById("pregunta"); // selecciona el párrafo pregunta
    pregunta.removeAttribute("onmouseover"); // elimina el evento para que no se repita
}