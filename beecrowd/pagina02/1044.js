const entrada = '6 12';
const entradaPartes = entrada.split(' ');
const A = parseFloat(entradaPartes[0]);
const B = parseFloat(entradaPartes[1]);

if ((B % A === 0) || (A % B === 0)) {
    console.log('Sao Multiplos');
} else {
    console.log('Nao sao Multiplos');
}
