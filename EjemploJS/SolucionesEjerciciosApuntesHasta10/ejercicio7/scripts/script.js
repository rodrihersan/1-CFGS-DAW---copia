function elementosCostura() {
    let arrayCostura = ["tela","bies","hilo","tijeras","máquina de coser","botón"];
    let arrayCostura2 = [];
    let arrayCostura3 = [];

    console.log(arrayCostura);

    arrayCostura.splice(1,1);//A partir de la posición 1, eliminar 1
    console.log(arrayCostura);

    arrayCostura.splice(2,0,"hilo torzal");// A partir de la posición 1, sin eliminar ninguno, introducir "hilo torzal"
    console.log(arrayCostura);

    arrayCostura.splice(3,1,"cúter rotatorio", "mesa de corte");
    console.log(arrayCostura);
    
    arrayCostura2 = arrayCostura.slice(0,3);
    console.log(arrayCostura2);
    
    arrayCostura3 = arrayCostura.slice(3,6);
    console.log(arrayCostura3);

    arrayCostura3.splice(0,0,"remalladora");
    arrayCostura3.splice(-1,0,"cinta métrica");
    console.log(arrayCostura3);

}