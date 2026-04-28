function comprobarChecks() {
    let fiebre = document.getElementById("fiebre").checked; // comprueba si fiebre está marcado
    let tos = document.getElementById("tos").checked; // comprueba si tos está marcado
    let respirar = document.getElementById("respirar").checked; // comprueba si respirar está marcado
    let grave = document.getElementById("grave").checked; // comprueba si grave está marcado

    let divComoActuar = document.getElementById("divComoActuar"); // selecciona el div donde mostrar el texto

    if (!fiebre && !tos && !respirar && !grave) { // si no hay ningún check marcado
        divComoActuar.innerText = ""; // borra el texto
        divComoActuar.removeAttribute("class"); // quita la clase
        return; // sale de la función
    }

    if ((fiebre || tos) && !respirar && !grave) { // si solo están marcados fiebre o tos o ambos sin respirar ni grave
        divComoActuar.innerText = "Quédate en casa y llama al teléfono habilitado en tu Comunidad Autónoma"; // muestra el texto
        divComoActuar.setAttribute("class", "textoAzul"); // aplica el estilo azul y negrita
    } else if ((fiebre || tos) && (respirar || grave)) { // si fiebre o tos están marcados junto a respirar o grave
        divComoActuar.innerText = "Llama al teléfono 112. Se trata de un teléfono de URGENCIAS. Su buen uso depende de todos. No llames si no es totalmente necesario"; // muestra el texto
        divComoActuar.setAttribute("class", "textoAzul"); // aplica el estilo azul y negrita
    }
}

function iniciar() {
    let divParaTodos = document.getElementById('paraTodos'); // selecciona el div paraTodos

    let titulo = document.createElement('h2'); // crea el título h2
    titulo.setAttribute('id', 'tituloProteccion'); // le asigna el id
    titulo.innerText = '¿Cómo puedo protegerme?'; // le pone el texto
    titulo.setAttribute('onmouseover', 'mostrarInfo()'); // asigna el evento mouseover
    titulo.setAttribute('onmouseout', 'ocultarInfo()'); // asigna el evento mouseout

    divParaTodos.appendChild(titulo); // añade el título al div
}

function mostrarInfo() {
    let titulo = document.getElementById('tituloProteccion'); // selecciona el título
    titulo.setAttribute('class', 'h2Activo'); // le aplica el estilo activo

    let p1 = document.createElement('p'); // crea el primer párrafo
    p1.setAttribute('id', 'p1'); // le asigna el id
    p1.innerText = 'Lávate las manos frecuentemente con agua y jabón.'; // le pone el texto

    let p2 = document.createElement('p'); // crea el segundo párrafo
    p2.setAttribute('id', 'p2'); // le asigna el id
    p2.innerText = 'Al toser o estornudar, cúbrete la boca y la nariz con el codo flexionado o con un pañuelo desechable y tíralo a la basura.'; // le pone el texto

    let p3 = document.createElement('p'); // crea el tercer párrafo
    p3.setAttribute('id', 'p3'); // le asigna el id
    p3.innerText = 'Evita tocarte los ojos, la nariz y la boca, y que las manos facilitan la transmisión.'; // le pone el texto

    let divParaTodos = document.getElementById('paraTodos'); // selecciona el div paraTodos
    divParaTodos.appendChild(p1); // añade el primer párrafo al div
    divParaTodos.appendChild(p2); // añade el segundo párrafo al div
    divParaTodos.appendChild(p3); // añade el tercer párrafo al div
}

function ocultarInfo() {
    let titulo = document.getElementById('tituloProteccion'); // selecciona el título
    titulo.removeAttribute('class'); // quita la clase para volver al estilo original

    let p1 = document.getElementById('p1'); // selecciona el primer párrafo
    let p2 = document.getElementById('p2'); // selecciona el segundo párrafo
    let p3 = document.getElementById('p3'); // selecciona el tercer párrafo

    let divParaTodos = document.getElementById('paraTodos'); // selecciona el div paraTodos
    divParaTodos.removeChild(p1); // elimina el primer párrafo del div
    divParaTodos.removeChild(p2); // elimina el segundo párrafo del div
    divParaTodos.removeChild(p3); // elimina el tercer párrafo del div
}