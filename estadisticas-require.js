let estadisticas = require('estadisticas');

let values = [12,45,67,87,34,2,7,23];

let stdDev = estadisticas.standardDeviation(values);
let avg = estadisticas.average(values);
let differences = estadisticas.differences(values);
let square = estadisticas.square(values);

console.log(avg, stdDev, differences, square);
