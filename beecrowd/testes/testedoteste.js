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
    valor = valor % 2
// MOEDAS:
    const moeda1 = (valor / 1).toFixed(2);
    valor = valor % 1

    const moeda50 = (valor / 0.50);

    return moeda50;
}
let res = separacaoDeNotas(nmr);
console.log(res)