/* Ejemplo de hoisting con let */
/* La declaración de variables se mueve al inicio del programa
en tiempo de ejecución, no así la incialización */

let miVariable = 1;

function miFuncion() {

    console.log(miVariable); //referenceError
    let miVariable = 2;
    console.log(miVariable); // 2
}

miFuncion(); // Si noe jecuto mi función miVariable es 1
