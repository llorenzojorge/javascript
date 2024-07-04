var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nmr = parseFloat(3.14159);
let raio = parseFloat(lines[0]);

let area = (nmr * Math.pow(raio, 2)).toFixed(4);

console.log(`A=${area}`);
