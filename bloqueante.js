let now = Date.now();

console.log("Inicio Bloqueante " + now);

while(new Date().getTime() < now + 3000) { 
	/* No hacemos nada */	
}

console.log("Fin Bloqueante");

