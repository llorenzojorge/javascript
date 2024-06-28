const entrada = '7 14 106';
const entradaPartes = entrada.split(' ');
const n1 = parseInt(entradaPartes[0]);
const n2 = parseInt(entradaPartes[1]);
const n3 = parseInt(entradaPartes[2]);

let maior = n1;

if (n2 > n1) {
    maior = n2;
}
if (n3 > n2 || n3 > n1) {
    maior = n3;
}

console.log(`${maior} eh o maior`);










// let n1 = 10
// let n2 = 15
// let n3 = 9
// let maior = n1

// if (n2 > n1) {
//     maior = n2
// }

// console.log(maior)