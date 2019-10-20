let moment = require('moment');

let now = moment();

while(new Date().getTime() < now + 3000) { 
	/* No hacemos nada */	
}

console.log(now.seconds);