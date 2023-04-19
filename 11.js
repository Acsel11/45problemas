let contador = 0;


for (let i = 1; i <= num; i++) {
 if (i % 3 === 0) {
   console.log(i);
   contador++;
 }
}


console.log("Hay " + contador + " múltiplos de 3 entre 1 y " + num);
