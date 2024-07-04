const nmr = parseFloat(576.73).toFixed(2);
function separacaoDeNotas(entrada) {
    let valor = entrada
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
// MOEDAS:
    const moeda1 = valor % 2;

    return {
        n100: nota100,
        n50: nota50,
        n20: nota20,
        n10: nota10,
        n5: nota5,
        n2: nota2,
        n1: moeda1
    }
}

const res = separacaoDeNotas(nmr);
console.log('NOTAS:')
console.log(`${res.n100} nota(s) de R$ 100.00`);
console.log(`${res.n50} nota(s) de R$ 50.00`);
console.log(`${res.n20} nota(s) de R$ 20.00`);
console.log(`${res.n10} nota(s) de R$ 10.00`);
console.log(`${res.n5} nota(s) de R$ 5.00`);
console.log(`${res.n2} nota(s) de R$ 2.00`);
console.log(`${res.n1} nota(s) de R$ 1.00`);