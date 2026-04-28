function cambiarFondo(id) { // la función recibe un número (1,2,3...) que indica qué div cambiar
    document.getElementById(id).classList.add("fondoDestacado"); // busca el div con ese número y le añade la clase que cambia el fondo
}

function restaurarFondo(id) { // la función recibe el mismo número para saber qué div restaurar
    document.getElementById(id).classList.remove("fondoDestacado"); // busca el div con ese número y le quita la clase, volviendo al fondo original
}

let fechas = document.getElementsByTagName("h3"); // selecciona todos los h3 del documento (las fechas)
for (let i = 0; i < fechas.length; i++) { // recorre cada h3 uno a uno
    let id = i + 1; // calcula el id del div correspondiente (i empieza en 0 pero los ids empiezan en 1)
    fechas[i].setAttribute("onmouseover", "cambiarFondo(" + id + ");"); // al pasar el ratón por encima del h3 llama a cambiarFondo con el id del div de abajo
    fechas[i].setAttribute("onmouseout", "restaurarFondo(" + id + ");"); // al quitar el ratón llama a restaurarFondo con ese mismo id
}

function actualizar() {
    let tbody = document.getElementsByTagName("tbody")[0]; // selecciona el tbody de la tabla
    let fila = document.createElement("tr"); // crea la nueva fila

    for (let i = 1; i <= 4; i++) { // repite 4 veces, una por cada celda
        let td = document.createElement("td"); // crea la celda
        td.innerHTML = prompt("Introduce el nombre del libro " + i + ":"); // pide el nombre al usuario y lo mete en la celda
        fila.appendChild(td); // añade la celda a la fila
    }

    tbody.appendChild(fila); // añade la fila al final de la tabla
}
