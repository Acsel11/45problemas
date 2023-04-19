function factorial(numero) {
 if (numero === 0) {
   return 1;
 } else {
   return numero * factorial(numero - 1);
 }
}


let num = Number(prompt("Introduce un número para calcular su factorial: "));
let resultado = factorial(num);
console.log("El factorial de " + num + " es " + resultado);
