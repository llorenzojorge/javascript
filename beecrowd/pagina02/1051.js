let salario = parseFloat(20014.00);

function calcImpostoRenda(salario) {
    let imposto = 0.00;
    if (salario <= 2000.00) {
        return console.log('Isento');
    } else if (salario <= 3000.00) {
        imposto = (salario - 2000.00) * 0.08;
        return console.log(`${imposto.toFixed(2)}`);
    } else if (salario <= 4500.00) {
        imposto = (3000.00 - 2000.00) * 0.08;
        imposto += (salario - 3000.00) * 0.18;
        return console.log(`${imposto.toFixed(2)}`);
    } else {
        imposto = (3000.00 - 2000.00) * 0.08;
        imposto += (4500.00 - 3000.00) * 0.18;
        imposto += (salario - 4500.00) * 0.28;
        return console.log(`${imposto.toFixed(2)}`);
    }
}
calcImpostoRenda(salario);