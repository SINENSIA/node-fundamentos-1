/* Ejemplo de función flecha
En el primer bloque el enfoque tradicional
En el segundo funciones arrow
 */

function suma (num1, num2) {
    return num1 + num2;
}

//console.log(suma(1, 3));


console.log( function () { return 1 + 3; }() );

console.log( (() => 1 + 3)() );

let suma13 = () => 1 + 3;

let doble = num => num * 2;

console.log(suma13);

//let suma = (num1, num2) => num1 + num2;




let elementos = [
    'Yodo',
    'Argón',
    'Helio',
    'Carbón',
    'Wolframio',
    'Mercurio'
];

elementos.forEach((elemento,index) => console.log("El elemento " + index + " es es: " + elemento));

/*
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));
materials.forEach(() => { console.log(this.length) });
*/