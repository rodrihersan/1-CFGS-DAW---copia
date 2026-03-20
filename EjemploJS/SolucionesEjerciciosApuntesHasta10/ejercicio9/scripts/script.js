function controlColores() {
  let arrayColores = [];
let iteraciones = 0;
  while (true) {
    let color = prompt("Introduzca un color");
    iteraciones++;
    if (color == "rojo") {
      break;
    }
    if (color == "verde") {
      continue;
    }
    arrayColores.push(color);
  }
  alert("Nº de veces que se ha introducido un color: \n" + iteraciones);
  alert(arrayColores);
}
