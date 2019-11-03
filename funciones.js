let height = 5;
let radius = 3;
let volume;
// declare and immediately call anonymous function to create scope
(function () {/*from w  w  w  . j  av a  2 s  . c  o m*/
     let pir2 = Math.PI * radius * radius;   // temp var
     volume = (pir2 * height) / 3;
})();

console.log(volume);