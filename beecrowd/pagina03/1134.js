let lines = [8, 1,7, 2, 2, 4];

function tipoCombustivel() {
    let entrada;
    let alcool = parseInt(0);
    let gasolina = parseInt(0);
    let diesel = parseInt(0);

    for (let i = 0; i < lines.length; i++) {
        entrada = parseInt(lines[i]);

        if (entrada <= 0 || entrada >= 5) {
            break
        } else if (entrada === 1) {
            alcool++
        } else if (entrada === 2) {
            gasolina++
        } else if (entrada === 3) {
            diesel++
        } else { // entrada: 4
            break
        }
    }
    
}