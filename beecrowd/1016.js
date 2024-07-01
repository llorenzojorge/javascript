var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const km = parseInt(lines[0]);
const res = km * 2

console.log(`${res} minutos`);