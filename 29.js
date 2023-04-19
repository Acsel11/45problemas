function tiradasDados() {
 let suma = 0;
 let contador = 0;


 for (let i = 0; i < 100; i++) {
   const dado1 = Math.floor(Math.random() * 6) + 1;
   const dado2 = Math.floor(Math.random() * 6) + 1;
   suma = dado1 + dado2;
   if (suma === 10) {
     contador++;
   }
 }


 console.log(`El número de veces que la suma de los dos dados es 10 es: ${contador}`);
}


tiradasDados();

