//-------------------------EJERCICIO 1------------------------------------------------
function bienvenida() {
    let dato = prompt("Introduzca su nombre por favor");

    if (dato === null || dato.trim() === "") {

        console.error("No se ha introducido valor");
        alert("No se ha introducido valor");

    } else {
        alert("Bienvenido" + dato);
    }
}

//-------------------------EJERCICIO 2------------------------------------------------
function edad() {
    let dato = prompt("Introduzca su edad por favor"); // prompt() devuelve cadena o null

    if (dato === null || dato.trim() === "") {
        console.error("No se ha introducido valor");
        alert("No se ha introducido valor");
    } else {
        let años = Number(dato); // Number() para convertir cadena a número (tema 4.2)

        if (isNaN(años)) {
            console.error("El valor introducido no es un número");
            alert("El valor introducido no es un número");
        } else if (años < 0) {
            alert("Tu edad es: " + años + ". Edad negativa no válida.");
        } else if (años < 18) {
            alert("Tu edad es: " + años + ". Eres menor de edad (menos de 18 años).");
        } else {
            alert("Tu edad es: " + años + ". Eres mayor de edad (18 años o más).");
        }
    }
}

//-------------------------EJERCICIO 3------------------------------------------------
function suma() {
    let dato1 = prompt("Introduce un numero: ");
    let dato2 = prompt("Introduce un segundo numero: ");

    if(dato1 === null || dato1.trim() === ""){
        console.error("Primer valor no introducido");
        alert("Primer valor introducido incorrecto");
    }else if (dato2 === null || dato2.trim() === ""){
        console.error("Segundo valor no introducido");
        alert("Segundo valor introducido incorrecto");
    }else{
        let sumaValor1 = Number(dato1);
        let sumaValor2 = Number(dato2);

        if (isNaN(sumaValor1) || isNaN(sumaValor2)) {  // ✅ Validar que sean números
            console.error("Alguno de los valores no es un número");
            alert("Introduce solo números");
        } else {
            console.log("La suma de ambos valores es: " + (sumaValor1 + sumaValor2));
            alert("La suma de ambos valores es: " + (sumaValor1 + sumaValor2));
        }
    }
}

//-------------------------EJERCICIO 4------------------------------------------------
function array(){
    let arrayNombres = ["Rodrigo","Mikel","Oscar","Javi"]

    alert("Tu array actual es: " + arrayNombres);

    let nombre = prompt("Añade un nombre al array: ");

    if(nombre === null || nombre.trim() === ""){
        console.error("No se ha introducido ningun nombre.");
        alert("No has introducido ningún nombre.");
    }else{
        arrayNombres.push(nombre);
        console.error(arrayNombres);
        alert(arrayNombres);
    }
}

//-------------------------EJERCICIO 5------------------------------------------------
function crearArray() {
    let arrayNumeros = [];
    let numero;

    do {
        numero = prompt("Añade un numero al array (introduce una letra para terminar): ");

        if (isNaN(numero) || numero === null) {
            break; // sale si introduce una letra o pulsa Cancelar
        } else if (numero.trim() === "") {
            alert("No se ha introducido ningún valor");
        } else {
            arrayNumeros.push(Number(numero));
        }

    } while (true);

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            console.warn(arrayNumeros[i]);
        }
    }
}

//-------------------------EJERCICIO 6------------------------------------------------
function parImpar(){
    let numero;

    do{
        numero = prompt("Introduce un numero: ");

        if(numero === null || numero.trim()=== ""){
            break;
        
        }else if (isNaN(numero)) {
            console.error("El valor que se ha introducido no es un numero.");
            alert("El valor que se ha introducido no es un numero.");
        }else{
            if(numero % 2 === 0){
                alert("El numero: " + numero + " es par");
            }else{
                alert("El numero: " + numero + " es impar");
            }
        }
    }while(numero !== null || numero.trim() !== "");
}

//-------------------------EJERCICIO 7------------------------------------------------
function tablaMultiplicar(){
    let numero = prompt("Introduce un numero: ");
    
    if(numero === null || numero.trim()===""){
        console.error("Dato invalido");
        alert("No se ha introducido numero");
    }else if (isNaN(numero)){
        console.error("El valor que se ha introducido no es un numero.");
        alert("El valor que se ha introducido no es un numero.");       
    }else{
        alert("TABLA MULTIPLICAR DEL NUMERO " + numero);
        for(let i = 0; i<=10; i++){
            alert(numero*i);
        }
    }
}

//-------------------------EJERCICIO 8------------------------------------------------
function numAleatorio(){

    let aleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(aleatorio);

    let numUser;

    do{
        numUser = prompt("Se ha generado un numero aleatorio de 0 a 100. Introduce el numero que creas que se ha generado: ");
        
        if(numUser === null || numUser.trim()===""){
            console.error("Dato sin introducir");
            alert("Dato sin introducir");

        }else if (isNaN(numUser)){
            console.error("Se ha introducido algo distinto a un numero");
            alert("Eso no es un número. Solo se pueden introducir numeros");

        }else if(numUser <= 0 || numUser > 100){
            console.error("Se ha introducido algo distinto a un numero");
            alert("Solo se pueden introducir numeros entre 1 y 100 (ambos incluidos)");
        }else if (numUser < aleatorio){
            console.error("El numero del usuario no coincide y es menor");
            alert("Numero elegido menor al generado.");
        }else if (numUser >  aleatorio){
            console.error("El numero del usuario no coincide y es mayor");
            alert("Numero elegido mayor al generado.")
        }

    }while(numUser != aleatorio || numUser === null);

    alert("¡Correcto! El numero era: " + aleatorio);
}

//-------------------------EJERCICIO 9------------------------------------------------
function ciudades(){

    let usuarios = [];

    for(let i = 1; i<=2; i++){
        let nombre = prompt("Introduce tu nombre: ");
        let edad = prompt("Introduce tu edad: ");
        let ciudad = prompt("Introduce tu ciduad: ");

        if(nombre === null || nombre.trim() === "" || ciudad === null || ciudad.trim() === ""){
            console.error("Datos usuario " + i+  " no registrados");
            alert("Datos usuario " + i + "  no registrados");
        }else if (edad === null || edad.trim()===""|| isNaN(edad)){
            console.error("Datos usuario " + i+  " no registrados");
            alert("Datos usuario " + i + "  no registrados");
        }else{
            usuarios.push({nombre: nombre, edad: edad, ciudad: ciudad});
            console.log("Datos usuario " + i+  " guardados");
            alert("Datos usuario " + i + "  registrados");
        }
    }

    let ciudadesText = "";
    for(let i = 0; i < usuarios.length; i++){
        ciudadesText += usuarios[i].ciudad;
    }

    let ciudadElegida = prompt("Estas son las ciudades almacenadas: " + ciudadesText + "Selecciona una: ");

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].ciudad.toLowerCase() === ciudadElegida.toLowerCase() && Number(usuarios[i].edad) > 25){
            console.log(usuarios[i].nombre);
            alert(usuarios[i].nombre);
        }
    }
}

//-------------------------EJERCICIO 10------------------------------------------------
function calculadora(){
    
    let dato1;

    do{
        dato1 = prompt("Ingrese el valor que usted desee: ");

        if(dato1 === null || dato1.trim() === "" || isNaN(dato1)){
            console.error("Dato introducido erroneamente");
            alert("Los datos no cumplen los parametros");
        }
    }while(dato1.trim() === "" || isNaN(dato1));
    dato1 = Number(dato1);

    console.log("Dato 1: " + dato1 +  " introducido correctamente");
    alert("Dato 1: " + dato1 +  " introducido correctamente");

    let dato2;

    do{
        dato2 = prompt("Ingrese el segundo valor que usted desee: ");
        if(dato2 === null || dato2.trim() === "" || isNaN(dato2)){
            console.error("Dato introducido erroneamente");
            alert("Los datos no cumplen los parametros");
        }
    }while(dato2.trim() === "" || isNaN(dato2));
    dato2 = Number(dato2);

    console.log("Dato 2: " + dato2 +  " introducido correctamente");
    alert("Dato 2: " + dato2 +  " introducido correctamente");

    let opcion = Number(prompt("Seleccione una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"));
    do{
        switch(opcion){
            case 1: 
            console.log("Ha seleccionado suma, y el resultado es " + (dato1+dato2));
            alert("Ha seleccionado suma, y el resultado es " + (dato1+dato2));
            break;

            case 2: 
            console.log("Ha seleccionado resta, y el resultado es " + (dato1-dato2));
            alert("Ha seleccionado resta, y el resultado es " + (dato1-dato2));
            break;

            case 3: 
            console.log("Ha seleccionado multiplicacion, y el resultado es " + (dato1*dato2));
            alert("Ha seleccionado multiplicacion, y el resultado es " + (dato1*dato2));
            break;

            case 4: 
            if (dato2 === 0) {
                alert("No se puede dividir entre cero");
                opcion = null;
            } else {
                alert("Resultado de la división: " + (dato1 / dato2));
            }
            break;

            default:
            console.log("Dato invalido");
            alert("Opcion no disponible");
        }  
    }while (opcion === null || Number(opcion) <1 || Number(opcion) > 4);
}

//-------------------------EJERCICIO 11------------------------------------------------
function adivinanzas(){

}

//-------------------------EJERCICIO 12------------------------------------------------
function juego(){
    
    let juegoPPT = Math.floor(Math.random() * 3) + 1;

    if(juegoPPT === 1){
        console.log("La opcion es piedra")
    }else if (juegoPPT === 2){
        console.log("La opcion es papel")
    }else if (juegoPPT === 3){
        console.log("La opcion es Tijera")
    }else{
        console.error("Opcion invalida");
        alert("Opcion invalida");
    }

    let opcionJugador;
    let numeroJugador;

    do{
        opcionJugador = prompt("Va a jugar al juego de 'Piedra-Papel-Tijera' contra la maquina. Introduzca su opcion: \n1. P para piedra \n2. Pa para papel \n3. T para Tijera");
        
        if(opcionJugador.toLowerCase() === "p"){
            numeroJugador = 1;
            console.log("El jugador ha elegido piedra");
            alert("Ha seleccionado piedra");
        }else if(opcionJugador.toLowerCase() === "pa"){
            numeroJugador = 2;
            console.log("El jugador ha elegido papel");
            alert("Ha seleccionado papel");
        }else if(opcionJugador.toLowerCase() === "t"){
            numeroJugador = 3;
            console.log("El jugador ha elegido tijera");
            alert("Ha seleccionado tijera");
        }else{
            console.error("Opcion invalida");
            alert("Opcion invalida");
        }
    }while(opcionJugador.toLowerCase() !== "p" && opcionJugador.toLowerCase() !== "pa" && opcionJugador.toLowerCase() !== "t");

    if(juegoPPT == 1 && numeroJugador == 1 || juegoPPT == 2 && numeroJugador == 2 || juegoPPT == 3 && numeroJugador == 3){
        console.log("Mismo movimiento. Empate");
        alert("Mismo movimiento. Empate");
    }else if (juegoPPT == 1 && numeroJugador == 2){
        console.log("La maquina ha sacado piedra y tu papel. Has ganado");
        alert("La maquina ha sacado piedra y tu papel. Has ganado");
    }else if (juegoPPT == 1 && numeroJugador == 3){
        console.log("La maquina ha sacado piedra y tu tijera. Has perdido");
        alert("La maquina ha sacado piedra y tu tijera. Has perdido");
    }else if (juegoPPT == 2 && numeroJugador == 1){
        console.log("La maquina ha sacado papel y tu piedra. Has perdido");
        alert("La maquina ha sacado papel y tu piedra. Has perdido");
    }else if(juegoPPT == 2 && numeroJugador == 3){
        console.log("La maquina ha sacado papel y tu tijera. Has ganado");
        alert("La maquina ha sacado papel y tu tijera. Has ganado");
    }else if(juegoPPT == 3 && numeroJugador == 1){
        console.log("La maquina ha sacado tijera y tu piedra. Has ganado");
        alert("La maquina ha sacado tijera y tu piedra. Has ganado");
    }else if(juegoPPT == 3 && numeroJugador == 2){
        console.log("maquina = tijera / usuario = papel. Usuario = perder Maquina = Ganar");
        alert("La maquina ha sacado tijera y tu papel. Has perdido");
    }
}