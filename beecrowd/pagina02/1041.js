const entrada = '4.5 -2.2';
const entradaPartes = entrada.split(' ');
const x = parseFloat(entradaPartes[0]);
const y = parseFloat(entradaPartes[1]);

if (x === 0 && y === 0) {
    console.log('Origem');
} else if (x > 0 && y > 0) {
    console.log('Q1');
} else if (x < 0 && y > 0) {
    console.log('Q2');
} else if (x < 0 && y < 0) {
    console.log('Q3');
} else if (x > 0 && y < 0) {
    console.log('Q4');
} else if (x === 0) {
    console.log('Eixo Y');
} else if (y === 0) {
    console.log('Eixo X');
}