/* Ejemplo de hoisting con var*/
/* La declaración de variables se mueve al inicio del programa
en tiempo de ejecución, no así la incialización */

var miVariable = 1;

function miFuncion() {

    console.log(miVariable); //udenfined ya que la decalración de la línea de abajo se sube al principio
    var miVariable = 2;
    console.log(miVariable); // 2
}

miFuncion(); // Si noe jecuto mi función miVariable es 1

