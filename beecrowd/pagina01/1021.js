const nmr = parseFloat(576.73).toFixed(2);
function separacaoDeNotas(entrada) {
    let valor = valor
// NOTAS:
    const nota100 = Math.floor(entrada / 100);
    const resto100 = Math.floor(entada % 100);

    const nota50 = Math.floor(resto100 / 50);
    const resto50 = Math.floor(resto100 % 50);

    const nota20 = Math.floor(resto50 / 20);
    const resto20 = Math.floor(resto50 % 20);

    const nota10 = Math.floor(resto20 / 10);
    const resto10 = Math.floor(resto20 % 10);

    const nota5 = Math.floor(resto10 / 5);
    const resto5 = Math.floor(resto10 % 5);

    const nota2 = Math.floor(resto5 / 2);
// MOEDAS:
    const moeda1 = Math.floor(resto5 % 2);
    const resto01 = (moeda1 /)

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
// console.log('MOEDAS:')
// console.log(`${res.m1} moeda(s) de R$ 1.00`);
// console.log(`${res.m50} moeda(s) de R$ 0.50`);
// console.log(`${res.m25} moeda(s) de R$ 0.25`);
// console.log(`${res.m10} moeda(s) de R$ 0.10`);
// console.log(`${res.m05} moeda(s) de R$ 0.05`);
// console.log(`${res.m01} moeda(s) de R$ 0.01`);