const entrada = '6.0 6.0 10.0';
const entradaPartes = entrada.split(' ');
const n1 = parseFloat(entradaPartes[0]);
const n2 = parseFloat(entradaPartes[1]);
const n3 = parseFloat(entradaPartes[2]);

let numeros = [n1, n2, n3];
numeros.sort(function(a, b) {
    return b - a;
});

let A = numeros[0];
let B = numeros[1];
let C = numeros[2];

if (A >= B+C) {
    console.log('NAO FORMA TRIANGULO');
    return;
}
if (Math.pow(A,2) === Math.pow(B,2) + Math.pow(C,2)) {
    console.log('TRIANGULO RETANGULO');
}
if (Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)) {
    console.log('TRIANGULO OBTUSANGULO');
}
if (Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)) {
    console.log('TRIANGULO ACUTANGULO');
}
if (A === B && B === C) {
    console.log('TRIANGULO EQUILATERO');
}
if ((A === B && A !== C) || (A === C && C !== A) || (B === C && B !== A)) {
    console.log('TRIANGULO ISOSCELES');
}