function iniciar() {

    //a: cambia el estilo del título h1
    let titulo = document.getElementsByTagName('h1')[0]; // selecciona el h1
    titulo.setAttribute('class', 'centrado'); // le aplica la clase centrado

    //b: mueve los divs de info antes del footer
    let divsInfo = document.getElementsByClassName('info1'); // selecciona los divs con clase info1
    let publicidad = document.getElementsByTagName('footer')[0]; // selecciona el footer

    publicidad.parentNode.insertBefore(divsInfo[1], publicidad); // mueve el segundo div antes del footer
    publicidad.parentNode.insertBefore(divsInfo[0], publicidad); // mueve el primer div antes del footer

    //c: cambia el atributo target de todos los areas
    let areas = document.getElementsByTagName('area'); // selecciona todos los elementos area
    for (let i = 0; i < areas.length; i++) { // recorre todos los areas
        areas[i].setAttribute('target', '_self'); // cambia el target a _self
    }
}

//2
//a: cambia el estilo del h1 al hacer click en París
function clickParis() {
    let titulo = document.getElementsByTagName('h1')[0]; // selecciona el h1
    titulo.setAttribute('class', 'centrado h1Paris'); // le aplica la clase h1Paris
}

//b: comprueba el estilo del h1 y actúa en consecuencia
function comprobarEstiloH1() {
    let titulo = document.getElementsByTagName('h1')[0]; // selecciona el h1

    if (titulo.getAttribute('class') === 'centrado') { // si el h1 tiene solo la clase centrado
        let textoExistente = document.getElementById('textoFinal'); // comprueba si ya existe el párrafo
        if (textoExistente) { // si ya existe
            textoExistente.innerText = '¿No está bonito así?'; // cambia su texto
        } else { // si no existe
            let nuevoTexto = document.createElement('p'); // crea un nuevo párrafo
            nuevoTexto.setAttribute('id', 'textoFinal'); // le asigna el id
            nuevoTexto.innerText = '¿No está bonito así?'; // le pone el texto
            document.body.appendChild(nuevoTexto); // lo añade al final del body
        }
    } else { // si el h1 tiene otra clase
        titulo.setAttribute('class', 'centrado h1Azul'); // le aplica la clase h1Azul
    }
}

//c: muestra alerta y restaura el estilo inicial
function clickCuarto() {
    alert('Por favor, deja de marear'); // muestra la alerta

    let titulo = document.getElementsByTagName('h1')[0]; // selecciona el h1
    titulo.setAttribute('class', 'centrado'); // restaura la clase inicial

    let textoFinal = document.getElementById('textoFinal'); // selecciona el párrafo si existe
    if (textoFinal) { // si existe
        document.body.removeChild(textoFinal); // lo elimina del body
    }
}