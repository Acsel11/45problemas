let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));


let contadorPares = 0;
let sumaImpares = 0;


for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
 console.log(i);
 if (i % 2 === 0) {
   contadorPares++;
 } else {
   sumaImpares += i;
 }
}


console.log("Hay " + contadorPares + " números pares entre " + num1 + " y " + num2);
console.log("La suma de los números impares es " + sumaImpares);
