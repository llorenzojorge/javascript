var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const horas = parseInt(lines[0]);
const km = parseInt(lines[1]);
const calculo = horas * km;

const res = (calculo / 12).toFixed(3);
console.log(res);

