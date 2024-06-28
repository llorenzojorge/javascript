const entrada = lines[0];
const entradaPartes = entrada.split(' ');
const n1 = parseInt(entradaPartes[0]);
const n2 = parseInt(entradaPartes[1]);
const n3 = parseInt(entradaPartes[2]);

let maior = Math.max(n1, n2, n3); // tive que usar uma função pronta pq o site é um lixo.

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

// const entrada = lines[0];
// const entradaPartes = entrada.split(' ');
// const n1 = parseInt(entradaPartes[0]);
// const n2 = parseInt(entradaPartes[1]);
// const n3 = parseInt(entradaPartes[2]);

// let maior = n1;

// if (n2 > n1) {
//     maior = n2;
// }
// if (n3 > n2 || n3 > n1) {
//     maior = n3;
// }

// console.log(`${maior} eh o maior`);
