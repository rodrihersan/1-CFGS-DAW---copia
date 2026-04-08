function crearLista(){
    let arrayDatos = ["Uno", "Dos", "Tres"];
    let lista = document.createElement("ol");
    for (let index = 0; index < arrayDatos.length; index++) {
        let entrada = document.createElement("li");
        entrada.innerText = arrayDatos[index];
        lista.appendChild(entrada);
    }

    document.body.appendChild(lista);
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

}