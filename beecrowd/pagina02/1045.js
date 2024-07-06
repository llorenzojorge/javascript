const entrada = '6.0 6.0 10.0';
const entradaPartes = entrada.split(' ');
const n1 = parseFloat(entradaPartes[0]);
const n2 = parseFloat(entradaPartes[1]);
const n3 = parseFloat(entradaPartes[2]);
let A, B, C;

// Determinando o maior
if (n1 >= n2 && n1 >= n3) {
    A = n1;
} else if (n2 >= n1 && n2 >= n3) {
    A = n2;
} else {
    A = n3;
}
// Determinando o menor
if (n1 <= n2 && n1 <= n3) {
    C = n1;
} else if (n2 <= n1 && n2 <= n3) {
    C = n2;
} else {
    C = n3;
}
// Determinando o meio
if ((n1 > C && n1 < A) || (n1 < C && n1 > A)) {
    B = n1;
} else if ((n2 > C && n2 < A) || (n2 < C && n2 > A)) {
    B = n2;
} else {
    B = n3;
}

console.log(A, 'MAIOR')
console.log(B, 'MEIO')
console.log(C, 'MENOR')


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
if ((A === B && B !== C) && (A === C && C !== A)) {
    console.log('TRIANGULO ISOSCELES');
}
