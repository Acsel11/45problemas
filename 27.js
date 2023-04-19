let num = parseInt(prompt("Introduce un número del 0 al 10 para ver su tabla de multiplicar:"));


if (num < 0 || num > 10) {
 console.log("El número introducido no está entre 0 y 10.");
} else {
 for (let i = 0; i <= 10; i++) {
   let resultado = num * i;
   console.log(num + " x " + i + " = " + resultado);
 }
}

