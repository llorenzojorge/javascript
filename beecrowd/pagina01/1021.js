var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const nmr = parseFloat(lines[0]).toFixed(2);
function separacaoDeNotas(entrada) {
    let valor = entrada
    if (entrada < 0 || entrada > 1000000.00) {
        return;
    }
// NOTAS:
    const nota100 = Math.floor(valor / 100);
    valor = valor % 100;

    const nota50 = Math.floor(valor / 50);
    valor = valor % 50;

    const nota20 = Math.floor(valor / 20);
    valor = valor % 20;

    const nota10 = Math.floor(valor / 10);
    valor = valor % 10;

    const nota5 = Math.floor(valor / 5);
    valor = valor % 5;

    const nota2 = Math.floor(valor / 2);
    valor = valor % 2;
// MOEDAS:
    const moeda1 = Math.floor(valor / 1);
    valor = valor % 1;

    const moeda50 = Math.floor(valor / 0.50);
    valor = valor % 0.50;

    const moeda25 = Math.floor(valor / 0.25);
    valor = valor % 0.25;

    const moeda10 = Math.floor(valor / 0.10);
    valor = valor % 0.10;

    const moeda05 = Math.floor(valor / 0.05);
    valor = valor % 0.05;

    const moeda01 = (valor / 0.01).toFixed(0);

    return {
        // Notas:
        n100: nota100,
        n50: nota50,
        n20: nota20,
        n10: nota10,
        n5: nota5,
        n2: nota2,
        
        // Moedas:
        m1: moeda1,
        m50: moeda50,
        m25: moeda25,
        m10: moeda10,
        m05: moeda05,
        m01: moeda01

    }
}

const res = separacaoDeNotas(nmr);
// Notas:
console.log('NOTAS:')
console.log(`${res.n100} nota(s) de R$ 100.00`);
console.log(`${res.n50} nota(s) de R$ 50.00`);
console.log(`${res.n20} nota(s) de R$ 20.00`);
console.log(`${res.n10} nota(s) de R$ 10.00`);
console.log(`${res.n5} nota(s) de R$ 5.00`);
console.log(`${res.n2} nota(s) de R$ 2.00`);
// Moedas:
console.log('MOEDAS:')
console.log(`${res.m1} moeda(s) de R$ 1.00`);
console.log(`${res.m50} moeda(s) de R$ 0.50`);
console.log(`${res.m25} moeda(s) de R$ 0.25`);
console.log(`${res.m10} moeda(s) de R$ 0.10`);
console.log(`${res.m05} moeda(s) de R$ 0.05`);
console.log(`${res.m01} moeda(s) de R$ 0.01`);