function titulo() {
    let seccionIzq = document.getElementById("seccionIzq"); // selecciona la sección izquierda
    seccionIzq.classList.add("izquierdaJS"); // le añade el fondo transparente

    let seccionDer = document.getElementById("seccionDer"); // selecciona la sección derecha
    seccionDer.classList.add("derechaJS"); // le añade el fondo gris oscuro

    let seccionCentro = document.getElementsByTagName("p")[2]; // selecciona el párrafo del formulario
    seccionCentro.setAttribute("class", "pFormJs"); // pone el texto en rojo
}

function restaurar() {
    let seccionIzq = document.getElementById("seccionIzq"); // selecciona la sección izquierda
    seccionIzq.classList.remove("izquierdaJS"); // elimina el fondo transparente

    let seccionDer = document.getElementById("seccionDer"); // selecciona la sección derecha
    seccionDer.classList.remove("derechaJS"); // elimina el fondo gris oscuro

    let seccionCentro = document.getElementsByTagName("p")[2]; // selecciona el párrafo del formulario
    seccionCentro.removeAttribute("class"); // elimina la clase y vuelve al estilo original
}

function iniciar() {
    let tabla = document.createElement("table"); // crea el elemento tabla
    tabla.setAttribute("id", "tablaFinal"); // le asigna el id para darle estilo desde CSS

    let datos = [ // array con los datos de las 3 filas y 2 columnas
        ["Dato 1", "Dato 2"],
        ["Dato 3", "Dato 4"],
        ["Dato 5", "Dato 6"]
    ];

    for (let i = 0; i < datos.length; i++) { // recorre las filas
        let fila = document.createElement("tr"); // crea cada fila
        for (let j = 0; j < datos[i].length; j++) { // recorre las columnas
            let celda = document.createElement("td"); // crea cada celda
            celda.innerText = datos[i][j]; // añade el texto a la celda
            fila.appendChild(celda); // mete la celda en la fila
        }
        tabla.appendChild(fila); // mete la fila en la tabla
    }

    document.body.appendChild(tabla); // añade la tabla al final del body
}