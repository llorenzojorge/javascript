var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = lines[0];
const pi = 3.14159;

const volume = ((4/3) * pi * Math.pow(raio, 3)).toFixed(3); // v = (4/3) * pi * raio
console.log(`VOLUME = ${volume}`)

