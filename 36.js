let matrizTranspuesta = [];
for (let i = 0; i < 5; i++) {
 let fila = [];
 for (let j = 0; j < 4; j++) {
   fila.push(matriz[j][i]);
 }
 matrizTranspuesta.push(fila);
}


console.log(matrizTranspuesta);

