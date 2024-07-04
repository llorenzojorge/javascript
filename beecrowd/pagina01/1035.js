var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada = lines[0];
const entradaPartes = entrada.split(' ');
const A = parseInt(entradaPartes[0]);
const B = parseInt(entradaPartes[1]);
const C = parseInt(entradaPartes[2]);
const D = parseInt(entradaPartes[3]);

if (B > C && D > A && (C+D) > (A+B) && C >= 0 && D >= 0 && A % 2 === 0) {
    console.log('Valores aceitos')
} else {
    console.log('Valores nao aceitos')
}