var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entrada1 = lines[0];
const entrada1Partes = entrada1.split(' ');
const entrada2 = lines[1];
const entrada2Partes = entrada2.split(' ');

const x1 = entrada1Partes[0];
const y1 = entrada1Partes[1];
const x2 = entrada2Partes[0];
const y2 = entrada2Partes[1];

const calculo = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
console.log(calculo.toFixed(4));