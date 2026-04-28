function ejercicio14() {

    let edad = prompt("Introduzca su edad por favor"); // pide la edad al usuario

    if (edad == null || edad == "") { // si el usuario cancela o no introduce nada
        console.error("No se ha introducido valor"); // muestra un error por consola
        alert("No se ha introducido valor"); // muestra una alerta al usuario

    } else if (edad < 0) { // si la edad es negativa
        console.error("No puedes tener edad negativa"); // muestra un error por consola
        alert("No puedes tener edad negativa"); // muestra una alerta al usuario

    } else if (edad >= 0 && edad < 18) { // si la edad es menor de 18
        console.warn("Menor de edad"); // muestra un aviso por consola
        alert("Eres menor de edad y tienes " + edad + " años"); // muestra una alerta al usuario

    } else { // si la edad es mayor o igual a 18
        let label = document.createElement("label"); // crea el label para el campo cuenta
        label.innerText = "Nº cuenta: "; // le pone el texto

        let input = document.createElement("input"); // crea el input para el número de cuenta
        input.setAttribute("type", "text"); // tipo texto
        input.setAttribute("id", "cuenta"); // le asigna el id

        let div = document.getElementById("campoCuenta"); // selecciona el div donde meter el campo
        div.appendChild(label); // añade el label al div
        div.appendChild(input); // añade el input al div
    }

    let labels = document.getElementsByTagName("label"); // selecciona todos los labels del formulario
    for (let i = 0; i < labels.length; i++) { // recorre todos los labels
        labels[i].setAttribute("id", "label" + i); // le asigna un id único a cada label
        labels[i].setAttribute("onmouseover", "agrandarTexto('label" + i + "')"); // asigna el evento mouseover pasando el id
        labels[i].setAttribute("onmouseout", "reducirTexto('label" + i + "')"); // asigna el evento mouseout pasando el id
    }
}

function cambiarBorde() {
    document.getElementById("contrasena").setAttribute("class", "bordeAzul"); // cambia el borde del campo contraseña a azul cuando recibe el foco
}

function agrandarTexto(id) {
    document.getElementById(id).setAttribute("class", "textoGrande"); // agranda el texto del label al pasar el ratón por encima
}

function reducirTexto(id) {
    document.getElementById(id).removeAttribute("class"); // vuelve al tamaño original al quitar el ratón
}

function enviarFormulario(event) {
    event.preventDefault(); // evita que el formulario se envíe automáticamente
    let confirmado = confirm("¿Seguro que quieres enviar el formulario?"); // pide confirmación al usuario
    if (confirmado) { // si el usuario confirma
        event.target.submit(); // envía el formulario
    } else { // si el usuario cancela
        return false; // no hace nada
    }
}