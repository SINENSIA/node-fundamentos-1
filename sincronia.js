console.log("----------Síncrono------------");
console.log("1ª Línea");
console.log("2ª Línea");
console.log("3ª Línea");

// Asíncrono
console.log("----------Asíncrono-----------");
console.log("1ª Línea");
setTimeout( () => console.log("2ª Línea ⬅️  "), 1);
console.log("3ª Línea");

 


