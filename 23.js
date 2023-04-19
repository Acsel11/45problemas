let num = parseInt(prompt("Introduce un número:"));
let esPrimo = true;


if (num <= 1) {
 esPrimo = false;
} else {
 for (let i = 2; i <= Math.sqrt(num); i++) {
   if (num % i === 0) {
     esPrimo = false;
     break;
   }
 }
}


if (esPrimo) {
 console.log(num + " es primo.");
} else {
 console.log(num + " no es primo.");
}

