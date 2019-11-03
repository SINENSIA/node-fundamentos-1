let http = require('http');
let os = require('os');

console.log(module.paths);

let webserver = http.createServer(function(request, response) {
    console.log(request);

    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write(os.platform() + " " + os.release() + "\n");

    response.write((os.totalmem()/1073741824).toFixed(2) + " GB\n");
    response.write("Carga media: " + os.loadavg() + "\n");
    
    response.end('Hola mundo, esto es el servidor web de ' + os.hostname);

});

webserver.listen(80);
