const salario = parseFloat(400.00);
let aumento, salarioNovo, percentual;

if (salario <= 400.00) {
    percentual = 15;
    aumento = salario * (percentual/100);
    salarioNovo = salario + aumento;
} else if (salario <= 800.00) {
    percentual = 12;
    aumento = salario * (percentual/100);
    salarioNovo = salario + aumento;
} else if (salario <= 1200.00) {
    percentual = 10;
    aumento = salario * (percentual/100);
    salarioNovo = salario + aumento;
} else if (salario <= 2000.00) {
    percentual = 7;
    aumento = salario * (percentual/100);
    salarioNovo = salario + aumento;
} else if (salario > 2000.00) {
    percentual = 4;
    aumento = salario * (percentual/100);
    salarioNovo = salario + aumento;
}

console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
console.log(`Reajuste ganho: ${aumento.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);
