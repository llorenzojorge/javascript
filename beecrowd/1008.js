var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0]); // numero
let B = parseFloat(lines[1]).toFixed(2); // horas trabalhadas
let C = parseFloat(lines[2]).toFixed(2); // valor por hora

let salarioConta = B * C;
let salario = salarioConta//.toLocaleString('en-US', { style: 'currency', currency: 'USD' });   ELEVEI O NIVEL DEMAIS, NÃO PRECISAVA DISSO!!

console.log('NUMBER = ' + A);
console.log('SALARY = U$ ' + salario);
