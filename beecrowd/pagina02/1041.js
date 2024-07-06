const entrada = lines[0];
const entradaPartes = entrada.split(' ');
const n1 = parseInt(entradaPartes[0]);
const n2 = parseInt(entradaPartes[1]);
const n3 = parseInt(entradaPartes[2]);

let maior, menor, meio;

// Determinando o menor
if (n1 < n2 && n1 < n3) {
    menor = n1;
} else if (n2 < n1 && n2 < n3) {
    menor = n2;
} else {
    menor = n3;
}

// Determinando o maior
if (n1 > n2 && n1 > n3) {
    maior = n1;
} else if (n2 > n1 && n2 > n3) {
    maior = n2;
} else {
    maior = n3;
}

// Determinando o meio
if ((n1 > menor && n1 < maior) || (n1 < menor && n1 > maior)) {
    meio = n1;
} else if ((n2 > menor && n2 < maior) || (n2 < menor && n2 > maior)) {
    meio = n2;
} else {
    meio = n3;
}

console.log(menor);
console.log(meio);
console.log(maior);
console.log();
console.log(n1);
console.log(n2);
console.log(n3);