let fs = require('fs');

fs.readFile('DATA', 'utf8', function(err, contents) {
    console.log(contents);
    process.exit();
});
setTimeout(function() { console.log('my timer') }, 3);

console.log('Después de llamar readFile');

