alert("¡Hola Mundo 2!");

function comprobarNombres() {
  let nombre = prompt("Introduzca su nombre, por favor");
  if (nombre != undefined) {
    if (nombre == "") {
      console.error("No se ha introducido un nombre");
      alert("No ha introducido su nombre");
    } else {
      let confirmado = confirm("¿Es este su nombre? " + nombre);
      if (confirmado) {
        console.log("El nombre es correcto");
        alert("Bienvenido");
      } else {
        console.warn("No se sabe su nombre");
      }
    }
  } else {
    console.log("El usuario ha cancelado la operación");
  }
}

function mostrarVariables() {
  //  alert("Variable1: " + variable1); //Descomentar para probar. Esto dará un error porque no está inicializada la variable
    variable2 = null;
    alert("Variable2: " + variable2); //Esto no da error porque, aunque no esté declarada la variable, si está inicializada
    let variable1 = 34;
    alert("Variable1 declarada: " + variable1);
    variable3 = 15.9;
    alert("Multiplicación: "+ (variable1*variable3));
    variable3 = "Ahora soy un texto";
    alert("Variable3: " + variable3);
    alert("Multiplicación2: "+ (variable3*35));

    let usuario= { 
        id: 5, 
        fechaReg: "22/02/2019", 
        nombre: "Elena" 
    };
    alert("Fecha d registro del usuario: " + usuario.fechaReg);
}
