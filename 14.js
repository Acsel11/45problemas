let numeros = [];


for (let i = 0; i < 5; i++) {
 numeros.push(Number(prompt("Introduce un número: ")));
}


let mayor = numeros[0];
let menor = numeros[0];


for (let i = 1; i < numeros.length; i++) {
 if (numeros[i] > mayor) {
   mayor = numeros[i];
 }
 if (numeros[i] < menor) {
   menor = numeros[i];
 }
}


console.log("El mayor número es " + mayor);
console.log("El menor número es " + menor);
