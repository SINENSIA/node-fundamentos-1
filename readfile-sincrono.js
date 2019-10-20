let fs = require('fs');

let contents = fs.readFileSync('DATA', 'utf8');

console.log(contents);

console.log('Después de llamar readFileSync');