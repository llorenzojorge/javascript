var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada1 = lines[0];
let entradaPartes1 = entrada1.split(' ');
let entrada2 = lines[1];
let entradaPartes2 = entrada2.split(' ');

const codigo1 = parseInt(entradaPartes1[0]);
const nmr1 = parseInt(entradaPartes1[1]);
const valor1 = parseFloat(entradaPartes1[2]);

const codigo2 = parseInt(entradaPartes2[0]);
const nmr2 = parseInt(entradaPartes2[1]);
const valor2 = parseFloat(entradaPartes2[2]);

const pedido1 = nmr1 * valor1;
const pedido2 = nmr2 * valor2;
const resultado = (pedido1 + pedido2).toFixed(2);

console.log(`VALOR A PAGAR: R$ ${resultado}`);