let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));


let contador = 0;
let suma = 0;


for (let i = num1; i <= num2; i++) {
 if (i % 2 === 0) {
   console.log(i);
   contador++;
   suma += i;
 }
}


console.log("Hay " + contador + " múltiplos de 2 entre " + num1 + " y " + num2);
console.log("La suma de los múltiplos de 2 es " + suma);
