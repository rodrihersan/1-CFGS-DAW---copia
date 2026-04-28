// Punto 1 y 2: crear sección con tabla al cargar la página
function iniciar() {
    let seccion = document.createElement("div"); // crea el div contenedor de la tabla
    seccion.setAttribute("id", "seccionTabla"); // le asigna el id para darle estilo desde CSS

    let tabla = document.createElement("table"); // crea la tabla
    tabla.setAttribute("id", "tablaComparativa"); // le asigna el id para darle estilo desde CSS

    let datos = [ // array con los datos de la tabla, primera fila son las cabeceras
        ["", "Caravana", "Autocaravana"],
        ["Filtros (Aire, Aceite, otros)", "NO", "SÍ"],
        ["Mantenimiento mecánico*", "NO/SÍ", "SÍ"],
        ["ITV (Inspección Técnica de Vehículos)", "NO/SÍ", "SÍ"],
        ["Impuesto Circulación", "NO", "SÍ"],
        ["Seguro**", "SÍ", "SÍ"],
        ["Vehículo o medio de transporte extra", "NO", "SÍ"],
        ["Parking***", "SÍ", "NO/SÍ"],
        ["Revisiones del conjunto", "SÍ", "SÍ"],
        ["Adaptar vehículo para remolcar", "SÍ", "NO"]
    ];

    for (let i = 0; i < datos.length; i++) { // recorre las filas
        let fila = document.createElement("tr"); // crea cada fila
        for (let j = 0; j < datos[i].length; j++) { // recorre las columnas
            let celda;
            if (i === 0) { // si es la primera fila crea celdas de cabecera
                celda = document.createElement("th");
            } else { // si no crea celdas normales
                celda = document.createElement("td");
            }
            celda.innerText = datos[i][j]; // le pone el texto
            fila.appendChild(celda); // mete la celda en la fila
        }
        tabla.appendChild(fila); // mete la fila en la tabla
    }

    seccion.appendChild(tabla); // mete la tabla en el div contenedor
    document.body.appendChild(seccion); // añade el div al final del body

    // Punto 5: asigna el evento click al h1
    let h1 = document.getElementsByTagName("h1")[0]; // selecciona el h1
    h1.setAttribute("onclick", "cambiarEstilos();"); // le asigna el evento click
}

// Punto 5: cambia estilos al hacer click en el h1
function cambiarEstilos() {
    let info1 = document.getElementById("info1"); // selecciona el div info1
    let info2 = document.getElementById("info2"); // selecciona el div info2

    info1.classList.add("bordeRedondeado"); // redondea el borde de info1
    info2.classList.add("bordeRedondeado"); // redondea el borde de info2
    info2.classList.add("fondoOscuro"); // pone fondo negro y texto blanco en info2

    let h1 = document.getElementsByTagName("h1")[0]; // selecciona el h1
    h1.removeAttribute("onclick"); // elimina el evento para que no se repita
}

// Puntos 3 y 4: comprueba los checks y muestra el texto y la alerta
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
        alert("Aclárate!!!!");
    } else if (naturaleza) { // si solo está marcado naturaleza (con o sin espacio)
        alert("Alquila una autocaravana");
    } else if (ciudad) { // si solo está marcado ciudad (con o sin espacio)
        alert("No es para ti");
    }
}