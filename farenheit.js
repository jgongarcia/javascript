//<!DOCTYPE JavaScript>

function farenheit2Centigrados(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
var x = farenheit2Centigrados;      // x tendrá un objeto función que hace referencia a la función

console.log(typeof(x));
console.log(x(100));

