let lines = [8, 1,7, 2, 2, 4];

function tipoCombustivel() {
    let entrada;
    let alcool = parseInt(0);
    let gasolina = parseInt(0);
    let diesel = parseInt(0);

    for (let i = 0; i < lines.length; i++) {
        entrada = parseInt(lines[i]);

        if (entrada === 1) {
            alcool++
        } else if (entrada === 2) {
            gasolina++
        } else if (entrada === 3) {
            diesel++
        } else if (entrada === 4){ // entrada: 4
            break;
        }
    }
    console.log(`MUITO OBRIGADO`);
    console.log(`Alcool: ${alcool}`);
    console.log(`Gasolina: ${gasolina}`);
    console.log(`Diesel: ${diesel}`);
}

tipoCombustivel()