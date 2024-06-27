var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseFloat(lines[0]);
const B = parseFloat(lines[0]);
const C = parseFloat(lines[0]);

const pi = 3.14159;

const triangulo = (A*C) / 2;
const circulo = pi * (Math.pow(C, 2));
const trapezio = ((A+B) * C) / 2;
const quadrado = Math.pow(B, 2);
const retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

// Calculos:
// triangulo = (base*altura) / 2
// circulo =  pi * (Math.pow(raio, 2))
// trapezio = (B+b)*altura / 2
// quadrado = Math.pow(lado, 2)
// retangulo = comprimento * largura