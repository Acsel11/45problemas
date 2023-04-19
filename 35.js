let matriz = [];
for (let i = 0; i < 4; i++) {
 let fila = [];
 for (let j = 0; j < 5; j++) {
   let numero = Math.floor(Math.random() * 100) + 1;
   fila.push(numero);
 }
 matriz.push(fila);
}
console.log(matriz);

