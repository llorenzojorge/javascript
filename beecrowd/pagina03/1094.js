let lines = [10, '10 C', '6 R', '15 S', '5 C', '14 R', '9 C', '6 R', '8 S', '5 C', '14 R']

function experiencias(entrada) {
    
    let cobaiaQtd, cobaiaTipo;
    let total = {
        geral: 0,
        C: 0,
        R: 0,
        S: 0
    };

    for(let i = 1; i <= entrada; i++) {
        // Transformando number/string
        let separacao = lines[i].split(' ');
        cobaiaQtd = parseInt(separacao[0]);
        cobaiaTipo = separacao[1];

        // Definindo o total de cobaias
        total.geral+= cobaiaQtd;

        // Definindo o total de cobaias por tipo
        if (cobaiaTipo === 'C') {
            total.C+=cobaiaQtd;
        } else if (cobaiaTipo === 'R') {
            total.R+=cobaiaQtd;
        } else if (cobaiaTipo === 'S') {
            total.S+=cobaiaQtd;
        }
    }

    // Definindo o percentual por tipo
    let percentual = {
        C: total.C * 100 / total.geral,
        R: total.R * 100 / total.geral,
        S: total.S * 100 / total.geral
    };


    console.log(`Total: ${total.geral} cobaias`);
    console.log(`Total de coelhos: ${total.C}`);
    console.log(`Total de ratos: ${total.R}`);
    console.log(`Total de sapos: ${total.S}`);
    console.log(`Percentual de coelhos: ${percentual.C.toFixed(2)} %`);
    console.log(`Percentual de ratos: ${percentual.R.toFixed(2)} %`);
    console.log(`Percentual de sapos: ${percentual.S.toFixed(2)} %`);
}

let entrada = parseInt(lines[0]);
experiencias(entrada);