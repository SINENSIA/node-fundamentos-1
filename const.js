let pruebaLet = 1;
const pruebaConst = 1;

pruebaLet = 2; // OK
// pruebaConst = 2; // TypeError: Assignment to constant variable.

let pruebaObjLet = { nombre: 'Lucky', raza: 'Yorkshire Terrier' }
const pruebaObjConst = { nombre: 'Hero', raza: 'Pastor Alemán' }

pruebaObjLet.nombre = 'Toby'; // OK
pruebaObjConst.nombre = 'Yuma'; // OK!!!
pruebaObjConst.raza = 'Pointer'; //OK!!!
console.log(pruebaObjConst); // { nombre: 'Yuma', raza: 'Pointer' }
/**
 * Se pueden cambiar las propiedades de un objeto declarado
 * con const
 *  */ 

pruebaObjLet = { nombre: 'Otro perro', raza: 'Sin raza' } // OK
/**  pruebaObjConst = { nombre: 'Otro perro', raza: 'Sin raza' } // TypeError
* En este caso, se trata de un nuevo objeto por tanto
* no puede ser asignado a pruebaObjConst
*/