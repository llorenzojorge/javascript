const entrada = '6.0 4.0 2.0';
const entradaPartes = entrada.split(' ');
const A = parseFloat(entradaPartes[0]);
const B = parseFloat(entradaPartes[1]);
const C = parseFloat(entradaPartes[2]);

if (A + B > C && A + C > B && B + C > A) {
    let perimetro = A + B + C;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
    let area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}