function mostrarFormularioHorizontal() {
    let contenedor = document.getElementById("contenedor"); // selecciona el div contenedor

    let form = document.createElement("form"); // crea el formulario

    let inputNombre = document.createElement("input"); // crea el input de nombre
    inputNombre.setAttribute("type", "text"); // tipo texto
    inputNombre.setAttribute("name", "nombre"); // nombre del campo
    inputNombre.setAttribute("placeholder", "Introduce tu nombre"); // placeholder

    let inputEmail = document.createElement("input"); // crea el input de email
    inputEmail.setAttribute("type", "email"); // tipo email
    inputEmail.setAttribute("name", "email"); // nombre del campo
    inputEmail.setAttribute("placeholder", "Introduce tu email"); // placeholder

    let inputPassword = document.createElement("input"); // crea el input de contraseña
    inputPassword.setAttribute("type", "password"); // tipo password
    inputPassword.setAttribute("name", "password"); // nombre del campo
    inputPassword.setAttribute("placeholder", "Introduce tu contraseña"); // placeholder

    let botonEnviar = document.createElement("button"); // crea el botón de enviar
    botonEnviar.innerText = "Enviar"; // texto del botón
    botonEnviar.setAttribute("type", "submit"); // tipo submit

    form.appendChild(inputNombre); // añade el input de nombre al formulario
    form.appendChild(inputEmail); // añade el input de email al formulario
    form.appendChild(inputPassword); // añade el input de contraseña al formulario
    form.appendChild(botonEnviar); // añade el botón al formulario

    contenedor.appendChild(form); // añade el formulario al contenedor
}

function mostrarFormularioVertical() {
    let contenedor = document.getElementById("contenedor"); // selecciona el div contenedor

    let form = document.createElement("form"); // crea el formulario

    let inputNombre = document.createElement("input"); // crea el input de nombre
    inputNombre.setAttribute("type", "text"); // tipo texto
    inputNombre.setAttribute("name", "nombre"); // nombre del campo
    inputNombre.setAttribute("placeholder", "Introduce tu nombre"); // placeholder
    inputNombre.setAttribute("class", "campoFormulario"); // clase para el estilo de bloque

    let inputEmail = document.createElement("input"); // crea el input de email
    inputEmail.setAttribute("type", "email"); // tipo email
    inputEmail.setAttribute("name", "email"); // nombre del campo
    inputEmail.setAttribute("placeholder", "Introduce tu email"); // placeholder
    inputEmail.setAttribute("class", "campoFormulario"); // clase para el estilo de bloque

    let inputPassword = document.createElement("input"); // crea el input de contraseña
    inputPassword.setAttribute("type", "password"); // tipo password
    inputPassword.setAttribute("name", "password"); // nombre del campo
    inputPassword.setAttribute("placeholder", "Introduce tu contraseña"); // placeholder
    inputPassword.setAttribute("class", "campoFormulario"); // clase para el estilo de bloque

    let botonEnviar = document.createElement("button"); // crea el botón de enviar
    botonEnviar.innerText = "Enviar"; // texto del botón
    botonEnviar.setAttribute("type", "submit"); // tipo submit
    botonEnviar.setAttribute("class", "campoFormulario"); // clase para el estilo de bloque

    let botonLimpiar = document.createElement("button"); // crea el botón de limpiar
    botonLimpiar.innerText = "Limpiar"; // texto del botón
    botonLimpiar.setAttribute("type", "reset"); // tipo reset para limpiar el formulario
    botonLimpiar.setAttribute("class", "campoFormulario"); // clase para el estilo de bloque

    form.appendChild(inputNombre); // añade el input de nombre al formulario
    form.appendChild(inputEmail); // añade el input de email al formulario
    form.appendChild(inputPassword); // añade el input de contraseña al formulario
    form.appendChild(botonEnviar); // añade el botón de enviar al formulario
    form.appendChild(botonLimpiar); // añade el botón de limpiar al formulario

    contenedor.appendChild(form); // añade el formulario al contenedor
}