let tabla = [];


for (let pagina = 0; pagina < 3; pagina++) {
 let paginaActual = [];
 for (let fila = 0; fila < 4; fila++) {
   let filaActual = [];
   for (let columna = 0; columna < 5; columna++) {
     let valor = columna + fila*5 + pagina*20 + 1;
     filaActual.push(valor);
   }
   paginaActual.push(filaActual);
 }
 tabla.push(paginaActual);
}


console.log(tabla);


