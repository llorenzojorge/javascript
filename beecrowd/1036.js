var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada = lines[0];
const entradaPartes = entrada.split(' ');
const A = parseFloat(entradaPartes[0]);
const B = parseFloat(entradaPartes[1]);
const C = parseFloat(entradaPartes[2]);

const delta = Math.pow(B, 2) - 4 * A * C;
if (delta <= 0) {
    console.log('Impossivel calcular');
    return;
}

const r1 = (-B + Math.sqrt(delta)) / (2*A);
const r2 = (-B - Math.sqrt(delta)) / (2*A);

if (isNaN(r1) || isNaN(r2) || r1 === -Infinity || r2 === -Infinity) {
    console.log('Impossivel calcular');
} else {
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}