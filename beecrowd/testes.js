let salarioConta = Number(1000);
let salario = salarioConta.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
let data = new Date();
let dataFormatada = data.toLocaleString('pt-BR');


console.log(typeof salario); // teste = string
console.log(salario);
console.log(dataFormatada);