const entrada = lines[0];
const entradaPartes = entrada.split(' ');
const n1 = parseInt(entradaPartes[0]);
const n2 = parseInt(entradaPartes[1]);
const n3 = parseInt(entradaPartes[2]);

let maior = n1;

if (n2 > n1) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}

console.log(`${maior} eh o maior`);