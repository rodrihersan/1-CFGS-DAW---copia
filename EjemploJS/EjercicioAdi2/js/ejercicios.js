//-------------------------EJERCICIO 1------------------------------------------------
function nombreEstatico(){
    alert("Tu nombre sera Rodrigo jeje. Aqui no puedes introducir nada");

    let nombre = prompt("Introduce aqui tu nombre, no validare nada, asi que escribe algo y luego te lo muestro: ");
    alert(nombre);
}

//-------------------------EJERCICIO 2.01------------------------------------------------
function nombreCompleto(){
    let nombre = prompt("Introduce tu nombre: ");

    if(nombre === null || nombre.trim() === ""){
        console.error("Dato invalido");
        alert("Dato invalido");
    }

    let apellido = prompt("Introduce tu primer apellido: ");
    
    if(apellido === null || apellido.trim() === ""){
        console.error("Dato invalido");
        alert("Dato invalido");
    }

    alert("Bienvendio Sr." + apellido +","+nombre);
}

//-------------------------EJERCICIO 2.02------------------------------------------------
function multiplicacion(){
    let dato1;
    
    do{
        dato1 = prompt("Introduce un valor: ");

        if(dato1 === null || dato1.trim()===""|| isNaN(dato1)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato1.trim()===""|| isNaN(dato1));

    let dato2;

    do{
        dato2 = prompt("Introduce un valor: ");

        if(dato2 === null || dato2.trim()===""|| isNaN(dato2)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato2.trim()===""|| isNaN(dato2));

    alert("Los datos introducidos son: " + dato1 + " y " + dato2);
    alert("Su multiplicacion es: " + (dato1*dato2));
}

//-------------------------EJERCICIO 2.03------------------------------------------------
function diferencia(){
    let dato1;
    
    do{
        dato1 = prompt("Introduce un valor: ");

        if(dato1 === null || dato1.trim()===""|| isNaN(dato1)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato1.trim()===""|| isNaN(dato1));

    let dato2;

    do{
        dato2 = prompt("Introduce un valor: ");

        if(dato2 === null || dato2.trim()===""|| isNaN(dato2)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato2.trim()===""|| isNaN(dato2));

    alert("Los datos introducidos son: " + dato1 + " y " + dato2);
    alert("Su multiplicacion es: " + (dato1-dato2));
}
//-------------------------EJERCICIO 2.04------------------------------------------------
function division(){
    let dato1;
    
    do{
        dato1 = prompt("Introduce un valor: ");

        if(dato1 === null || dato1.trim()===""|| isNaN(dato1)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato1.trim()===""|| isNaN(dato1));

    let dato2;

    do{
        dato2 = prompt("Introduce un valor: ");

        if(dato2 === null || dato2.trim()===""|| isNaN(dato2)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }else if(dato2 == 0){
            console.error("Dato invalido");
            alert("No se puede dividir entre cero");
        }
    }while(dato2.trim()===""|| isNaN(dato2) || dato2 == 0);

    alert("Los datos introducidos son: " + dato1 + " y " + dato2);
    alert("Su division es: " + (dato1/dato2));
}

//-------------------------EJERCICIO 2.05------------------------------------------------
function operacion(){
    let dato1;
    
    do{
        dato1 = prompt("Introduce un valor: ");

        if(dato1 === null || dato1.trim()===""|| isNaN(dato1)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato1.trim()===""|| isNaN(dato1));

    let dato2;

    do{
        dato2 = prompt("Introduce un valor: ");

        if(dato2 === null || dato2.trim()===""|| isNaN(dato2)){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato2.trim()=== ""|| isNaN(dato2));

    alert("Los datos introducidos son: " + dato1 + " y " + dato2);
    alert("Su operacion es " + ((dato1*2)+(dato2*2)));
}

//-------------------------03.01.02 ------------------------------------------------
//03.01.02 - Crea una página web que pida al usuario dos números y diga cuántos de ellos son positivos

function positivos(){
    let dato1;
    
    do{
        dato1 = prompt("Introduce un numero: ");
        if(dato1.trim()=== "" || isNaN(dato1) || dato1 === null){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato1.trim()=== "" || isNaN(dato1));

    let dato2;

    do{
        dato2 = prompt("Introduce un numero: ");
        if(dato2.trim()=== "" || isNaN(dato2) || dato2 === null){
            console.error("Dato invalido");
            alert("Dato invalido");
        }
    }while(dato2.trim()=== "" || isNaN(dato2));

    if(dato1 % 2 == 0){
        console.log("Numero par");
        alert("El numero: " + dato1 + " es par");
    }else{
        console.log("Numero impar");
        alert("El numero: " + dato2 + " es impar");
    }

    if(dato2 % 2 == 0){
        console.log("Numero par");
        alert("El numero: " + dato2 + " es par");
    }else{
        console.log("Numero impar");
        alert("El numero: " + dato2 + " es impar");
    }
}

//-------------------------03.01.06 ------------------------------------------------
//03.01.06 - Crea una página web que pida al usuario cinco números y diga cuántos de ellos son negativos

function negativos(){
    
    
    let contadorNegativos =0;

    for(let i =1; i<=5; i++){
        let numeros;

        do{
            numeros = prompt("Introduce el valor numero " + i + ":");
            if(numeros.trim()=== "" ||numeros === null|| isNaN(numeros)){
            console.error("Dato invalido");
            alert("Dato invalido");
            }
        }while(numeros.trim()=== "" || isNaN(numeros));

        if(numeros < 0){
            contadorNegativos++;
        }
    }

    alert("El total de numeros negativos en esas 5 iteracciones es: " + contadorNegativos);
}


//-------------------------03.04.01 ------------------------------------------------
//03.04.01 - Crea una página web que muestre los números pares del 10 al 20 (ambos incluidos), usando "while"
function paresWhile(){
    let i = 10;
    while(i <= 20){
        if(i % 2 == 0){
            console.log(i);
            alert(i);
        }
        i++;
    }
}

//03.06.02 - Crea una página web que muestre los números del 1 al 16, (ambos incluidos), saltando de 3 en 3, usando "for" 
function saltarTres(){
    for(let i = 1; i <= 16; i += 3){
        console.log(i);
        alert(i);
    }
}

//03.06.03 - Muestra los números pares del 10 al 20 (ambos incluidos), usando "for"
function paresFor(){
    for(let i = 10; i <= 20; i++){
        if(i % 2 == 0){
            console.log(i);
            alert(i);
        }
    }
}
