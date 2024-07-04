const vendedor = 'João'
const salario = parseFloat(500)
const vendas = parseFloat(1230.30)

const comissao15 = vendas * 0.15;
const salarioTotal = comissao15 + salario;

console.log('TOTAL = R$ ' +salarioTotal.toFixed(2));