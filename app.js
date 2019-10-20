// Modulo 1
//console.log("¡¡Hola Mundo!!")

console.log("¡¡Hola Mundo!!");

// Módulo 2
// Codigo Síncrono vs No Asíncrono
//
// Bloqueante
// Detendrá la ejecución durante un segundo
let now = Date.now();

console.log("Inicio Bloqueante" + now);

while(new Date().getTime() < now + 1000) { 
	/* do nothing */ 
}

console.log("Fin Bloqueante");

// No Bloqueante

console.log("Inicio No bloqueante");
setTimeout(function() { console.log("Fin no bloqueante")} , 1000);
console.log("Esto terminará antes que Fin no bloqueante");


/*
console.log("----------Síncrono------------");
console.log("1ª Línea");
console.log("2ª Línea");
console.log("3ª Línea");

// Asíncrono
console.log("----------Asíncrono-----------");
console.log("1ª Línea");
setTimeout( () => console.log("2ª Línea ⬅️  "), 1);
console.log("3ª Línea");
*/
