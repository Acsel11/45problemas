function lanzamientoMoneda() {
 const resultado = Math.floor(Math.random() * 2) === 0 ? 'cara' : 'cruz';
 console.log(`Resultado: ${resultado}`);
}


lanzamientoMoneda();

