var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const km = parseInt(lines[0]);
const gasolina = parseFloat(lines[1]).toFixed(1);
const res = (km/gasolina).toFixed(3)

console.log(`${res} km/l`)