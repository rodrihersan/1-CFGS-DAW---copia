function pagar() {
  var precio = parseFloat(prompt("Introduce el precio del artículo"));
  var tipoIva = prompt(
    "Introduce el tipo de IVA a aplicar \n Será uno de estos tres valores: G, R, S"
  );
  if (!isNaN(precio) && (tipoIva == "R" || tipoIva == "G" || tipoIva == "S")) {
    alert("El precio final es: " + calcularPrecioFinal(precio, tipoIva));
  } else {
    alert("Uno de los valores introducidos no es válido");
  }
}

function calcularPrecioFinal(precio, tipoIva) {
  var resultado = 0;

  switch (tipoIva) {
    case `G`:
      resultado = precio * 1.21;
      break;
    case `R`:
      resultado = precio * 1.1;
      break;
    case `S`:
      resultado = precio * 1.04;
      break;
    default:
      alert("El tipo de IVA introducido no existe");
  }

  return resultado;
}
