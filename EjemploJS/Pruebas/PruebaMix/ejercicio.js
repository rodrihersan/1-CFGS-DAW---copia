function mostrarFormulario() {
    limpiarContenedor(); // limpia el contenedor antes de crear el formulario

    let contenedor = document.getElementById("contenedor"); // selecciona el contenedor

    let form = document.createElement("form"); // crea el formulario

    let inputNombre = document.createElement("input"); // crea el input de nombre
    inputNombre.setAttribute("type", "text"); // tipo texto
    inputNombre.setAttribute("name", "nombre"); // nombre del campo
    inputNombre.setAttribute("placeholder", "Introduce tu nombre"); // placeholder
    inputNombre.setAttribute("class", "campoFormulario"); // clase para el estilo

    let inputEmail = document.createElement("input"); // crea el input de email
    inputEmail.setAttribute("type", "email"); // tipo email
    inputEmail.setAttribute("name", "email"); // nombre del campo
    inputEmail.setAttribute("placeholder", "Introduce tu email"); // placeholder
    inputEmail.setAttribute("class", "campoFormulario"); // clase para el estilo

    let inputPassword = document.createElement("input"); // crea el input de contraseña
    inputPassword.setAttribute("type", "password"); // tipo password
    inputPassword.setAttribute("name", "password"); // nombre del campo
    inputPassword.setAttribute("placeholder", "Introduce tu contraseña"); // placeholder
    inputPassword.setAttribute("class", "campoFormulario"); // clase para el estilo

    let botonEnviar = document.createElement("button"); // crea el botón de enviar
    botonEnviar.innerText = "Enviar"; // texto del botón
    botonEnviar.setAttribute("type", "submit"); // tipo submit
    botonEnviar.setAttribute("class", "campoFormulario"); // clase para el estilo

    let botonLimpiar = document.createElement("button"); // crea el botón de limpiar
    botonLimpiar.innerText = "Limpiar"; // texto del botón
    botonLimpiar.setAttribute("type", "reset"); // tipo reset
    botonLimpiar.setAttribute("class", "campoFormulario"); // clase para el estilo

    form.appendChild(inputNombre); // añade el input de nombre al formulario
    form.appendChild(inputEmail); // añade el input de email al formulario
    form.appendChild(inputPassword); // añade el input de contraseña al formulario
    form.appendChild(botonEnviar); // añade el botón de enviar al formulario
    form.appendChild(botonLimpiar); // añade el botón de limpiar al formulario

    contenedor.appendChild(form); // añade el formulario al contenedor
}

function mostrarLista() {
    limpiarContenedor(); // limpia el contenedor antes de crear la lista

    let contenedor = document.getElementById("contenedor"); // selecciona el contenedor

    let listaPrincipal = document.createElement("ul"); // crea la lista principal

    let caravana = document.createElement("li"); // crea el elemento caravana
    caravana.innerText = "Caravana:"; // le pone el texto
    caravana.setAttribute("class", "tituloLista"); // le aplica el estilo

    let listaCaravana = document.createElement("ul"); // crea la sublista de caravana
    let itemsCaravana = ["Mantenimiento mecánico", "ITV pasada", "Seguro", "Parking"]; // array con los items
    for (let i = 0; i < itemsCaravana.length; i++) { // recorre el array
        let item = document.createElement("li"); // crea cada item
        item.innerText = itemsCaravana[i]; // le pone el texto
        item.setAttribute("class", "itemLista"); // le aplica el estilo
        listaCaravana.appendChild(item); // mete el item en la sublista
    }
    caravana.appendChild(listaCaravana); // mete la sublista dentro del li de caravana

    let autocaravana = document.createElement("li"); // crea el elemento autocaravana
    autocaravana.innerText = "Autocaravana:"; // le pone el texto
    autocaravana.setAttribute("class", "tituloLista"); // le aplica el estilo

    let listaAutocaravana = document.createElement("ul"); // crea la sublista de autocaravana
    let itemsAutocaravana = ["Filtros", "Mantenimiento mecánico", "ITV pasada", "Seguro"]; // array con los items
    for (let i = 0; i < itemsAutocaravana.length; i++) { // recorre el array
        let item = document.createElement("li"); // crea cada item
        item.innerText = itemsAutocaravana[i]; // le pone el texto
        item.setAttribute("class", "itemLista"); // le aplica el estilo
        listaAutocaravana.appendChild(item); // mete el item en la sublista
    }
    autocaravana.appendChild(listaAutocaravana); // mete la sublista dentro del li de autocaravana

    listaPrincipal.appendChild(caravana); // mete caravana en la lista principal
    listaPrincipal.appendChild(autocaravana); // mete autocaravana en la lista principal
    contenedor.appendChild(listaPrincipal); // añade la lista al contenedor
}

function mostrarListaDefinicion() {
    limpiarContenedor(); // limpia el contenedor antes de crear la lista de definiciones

    let contenedor = document.getElementById("contenedor"); // selecciona el contenedor

    let listaDef = document.createElement("dl"); // crea la lista de definiciones

    let terminos = ["Caravana", "Autocaravana"]; // array con los términos

    for (let i = 0; i < terminos.length; i++) { // recorre los términos
        let dt = document.createElement("dt"); // crea el término
        dt.innerText = terminos[i]; // le pone el texto
        dt.setAttribute("class", "terminoLista"); // le aplica el estilo

        let dd = document.createElement("dd"); // crea la definición
        dd.innerText = prompt("Introduce la definición de " + terminos[i] + ":"); // pide la definición al usuario
        dd.setAttribute("class", "definicionLista"); // le aplica el estilo

        listaDef.appendChild(dt); // añade el término a la lista
        listaDef.appendChild(dd); // añade la definición a la lista
    }

    contenedor.appendChild(listaDef); // añade la lista al contenedor
}

function limpiarContenedor() {
    let contenedor = document.getElementById("contenedor"); // selecciona el contenedor
    contenedor.innerHTML = ""; // borra todo el contenido del contenedor
}


function iniciar() {
    let divBotones = document.getElementById("divBotones"); // selecciona el div de los botones
    let contenedor = document.createElement("div"); // crea el div contenedor
    contenedor.setAttribute("id", "contenedor"); // le asigna el id
    divBotones.appendChild(contenedor); // lo añade debajo de los botones
}


/*PARA PONERLO DEBAJO DEL H1 TITULO

    function iniciar() {
    let divBotones = document.getElementById("divBotones"); // selecciona el div de botones por su id
    let contenedor = document.createElement("div"); // crea el div contenedor
    contenedor.setAttribute("id", "contenedor"); // le asigna el id
    divBotones.parentNode.insertBefore(contenedor, divBotones); // lo inserta antes del divBotones
}
    //PONEMOS PARENTNODE PORQUE AL USAR INSERTBEFORE SE TIENE QUE HACER REFERENCIA AL PADRE, EN ESTE CASO COMO SE APLICA DESPUES DEL H1 SU PADRE ES EL BODY
    */