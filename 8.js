let respuesta = "";


while (respuesta !== "S" && respuesta !== "N") {
 respuesta = prompt("Introduce S o N: ").toUpperCase();
}


console.log(`Has introducido ${respuesta}.`);

