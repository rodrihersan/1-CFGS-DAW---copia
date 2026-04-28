function crearLista(){
    let arrayDatos = ["Uno", "Dos", "Tres"];
    let lista = document.createElement("ol"); // Crea un <ol> pero aún no está en la página
    for (let index = 0; index < arrayDatos.length; index++) {
        let entrada = document.createElement("li"); // Crea un <li> pero tampoco está en la página
        entrada.innerText = arrayDatos[index];  // Le pone el texto (Uno, Dos o Tres)
        lista.appendChild(entrada); // Mete el <li> dentro del <ol>
    }

    document.body.appendChild(lista); // Ahora SÍ añade el <ol> a la página
}

function cambiarElementoTres(){
    let elementosLista = document.getElementsByTagName("li");
    let elemetoASustituir = elementosLista[elementosLista.length-1];
    let elementoNuevo = document.createElement("li");
    elementoNuevo.innerText = "Cuatro";

    let listaOrdenada = document.getElementsByTagName("ol")[0];
    listaOrdenada.replaceChild(elementoNuevo, elemetoASustituir);
}

function añadirHijoACuatro(){
    let elementoCuatro = document.getElementsByTagName("li")[2];
    let parrafoCuatro = document.createElement("p");
    parrafoCuatro.setAttribute("id", "parrafoNuevo");
    parrafoCuatro.innerText = "Soy hijo de cuatro";
    
    elementoCuatro.appendChild(parrafoCuatro);
}

function cambiarContenidoH1(){
    let encabezadoPrincipal = document.getElementsByTagName("h1")[0];
    encabezadoPrincipal.innerText = "He creado una lista";
}

function primerBoton(){
    let parrafo = document.getElementById("parrafoNuevo"); // es el unico que devuelve el elemento en si, los demas devuelven coleccion de datos
    parrafo.setAttribute("class","parrafoBoton1");
    //parrafo.classList.add("textoRojoNegrita"); otra forma de hacerlo, igual que arriba

    let elementosLista = document.getElementsByTagName("li");
    for (let i = 0; i < elementosLista.length; i++) {
        elementosLista[i].setAttribute("class", "listaBoton1");
    }

    let encabezadoPrincipal = document.getElementsByTagName("h1")[0];
    encabezadoPrincipal.setAttribute("class","tituloBoton1");
}

function segundoBoton(){
    let parrafo = document.getElementById("parrafoNuevo");
    parrafo.setAttribute("class","parrafoBoton2");

    let elementosLista = document.getElementsByTagName("li");
    for (let i = 0; i < elementosLista.length; i++) {
        elementosLista[i].setAttribute("class", "listaBoton2");
    }

    let encabezadoPrincipal = document.getElementsByTagName("h1")[0];
    encabezadoPrincipal.setAttribute("class","tituloBoton2");
}

function tercerBoton(){
    let parrafo = document.getElementById("parrafoNuevo");
    if(parrafo) parrafo.removeAttribute("class");

    let elementosLista = document.getElementsByTagName("li");
    for (let i = 0; i < elementosLista.length; i++) {
        elementosLista[i].removeAttribute("class");
    }

    let encabezadoPrincipal = document.getElementsByTagName("h1")[0];
    encabezadoPrincipal.removeAttribute("class");
}   

function ejecutarBucle() {
    let lista = document.getElementsByTagName("ol")[0];
    
    if (!lista) {
        alert("Primero debes crear la lista");
        return;
    }

    for (let i = 1; i <= 5; i++) {
        let elementos = lista.getElementsByTagName("li");

        if (i === 1) {
            let texto = prompt("Iteración 1: Introduce texto para la primera posición:");
            let nuevoLi = document.createElement("li");
            nuevoLi.innerText = texto;
            lista.insertBefore(nuevoLi, elementos[0]);

        } else if (i % 2 === 0) {
            let texto = prompt("Iteración " + i + " (par): Texto para la tercera posición:");
            let nuevoLi = document.createElement("li");
            nuevoLi.innerText = texto;
            lista.insertBefore(nuevoLi, elementos[2]);
            
        } else {
            let primero = elementos[0];
            let segundo = elementos[1];
            lista.insertBefore(primero, segundo.nextSibling); // mueve el primero tras el segundo
        }
    }
}
