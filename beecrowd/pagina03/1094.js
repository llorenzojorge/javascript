let lines = [10, '10 C', '6 R', '15 S', '5 C', '14 R', '9 C', '6 R', '8 S', '5 C', '14 R']

function experiencias(entrada) {
    // criando as variaveis
    let cobaiaQtd, cobaiaTipo;
    let total = 0;
    let totalC = 0;
    let totalR = 0;
    let totalS = 0;
    let percentualC = 0;
    let percentualR = 0;
    let percentualS = 0;

    for(let i = 1; i <= entrada; i++) {
        // transformando number/string
        let separacao = lines[i].split(' ');
        cobaiaQtd = parseInt(separacao[0]);
        cobaiaTipo = separacao[1];

        // Definindo o total de cobaias
        total+= cobaiaQtd;

        // Definindo o total de cobaias por tipo
        if (cobaiaTipo === 'C') {
            totalC+=cobaiaQtd;
        } else if (cobaiaTipo === 'R') {
            totalR+=cobaiaQtd;
        } else if (cobaiaTipo === 'S') {
            totalS+=cobaiaQtd;
        }
    }

    // Definindo o percentual por tipo
    percentualC = totalC * 100 / total;
    percentualR = totalR * 100 / total;
    percentualS = totalS * 100 / total;

    console.log(`Total: ${total} cobaias`);
    console.log(`Total de coelhos: ${totalC}`);
    console.log(`Total de ratos: ${totalR}`);
    console.log(`Total de sapos: ${totalS}`);
    console.log(`Percentual de coelhos: ${percentualC.toFixed(2)} %`);
    console.log(`Percentual de ratos: ${percentualR.toFixed(2)} %`);
    console.log(`Percentual de sapos: ${percentualS.toFixed(2)} %`);
}

let entrada = parseInt(lines[0]);
experiencias(entrada);