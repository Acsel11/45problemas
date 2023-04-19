let contador = 0;


while (true) {
 const frase = prompt("escribe la frase o salir: ");


 if (frase === "salir") {
   break;
 }


 contador++;
}


console.log(`Has introducido ${contador} frases.`);

