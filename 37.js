let matriz = [];
let numCursos = prompt("Introduce el número de cursos:");
let numAlumnos = prompt("Introduce el número de alumnos por curso:");
for (let i = 0; i < numCursos; i++) {
 let curso = [];
 for (let j = 0; j < numAlumnos; j++) {
   let nota = prompt(`Introduce la nota del alumno ${j+1} del curso ${i+1}:`);
   curso.push(parseFloat(nota));
 }
 matriz.push(curso);
}
console.log(matriz);


