const entrada = '3 2';
const entradaPartes = entrada.split(' ');

let codigo = parseInt(entradaPartes[0]);
const qtd = parseInt(entradaPartes[1]);

if (codigo === 1) {
    codigo = parseFloat(4.00)
} else if (codigo === 2) {
    codigo = parseFloat(4.50);
} else if (codigo === 3) {
    codigo = parseFloat(5.00);
} else if (codigo === 4) {
    codigo = parseFloat(2.00);
} else if (codigo === 5) {
    codigo = parseFloat(1.50);
}

const res = parseFloat(qtd*codigo).toFixed(2);
console.log(`Total: R$ ${res}`);