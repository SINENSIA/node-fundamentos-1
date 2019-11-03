let valor1 = -7;
let valor2 = 2;

function multiplicar() {
    let resultado;

    resultado = valor1 * valor2;
    if (resultado<0) {
        //let  miError = "El resultado es negativo"; //Solo disponible en este bloque 
        var miError = "El resultado es negativo";
    }
    if (miError) {
        throw "Error: " + miError;
    }
    return resultado;
}
console.log(multiplicar());






function operacion(b) {
    a = 7;
    result = (a * 3)/b;
    return result;
}

var a = 2;
operacion(4);
console.log(a);










