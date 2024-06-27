// entendendo como está ficando a divisão da string = '3.0 4.0 5.2'
let entrada = '3.0 4.0 5.2';
console.log(entrada);

let entradaPartes = entrada.split(' '); // divide a string pelos espaços
console.log(entradaPartes);

const A = parseFloat(entradaPartes[0]);
const B = entradaPartes[1];

console.log(typeof A, A);
console.log(typeof B, B);
