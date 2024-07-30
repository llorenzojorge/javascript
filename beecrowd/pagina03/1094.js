let lines = [10, '10 C', '6 R', '15 S', '5 C', '14 R', '9 C', '6 R', '8 S', '5 C', '14 R']
function experiencias(entrada) {
    let cobaiaQtd; let cobaiaTipo;
    let total; let totalC; let totalR; let totalS
    let percentualC; let percentualR; let percentualS;

    for(let i = 1; i <= entrada; i++) {
        // separando a QTD e TIPO de cobaias
        let separacao = lines[i].split(' ');
        cobaiaQtd = parseInt(separacao[0]);
        cobaiaTipo = separacao[1];
    }
}

let entrada = parseInt(lines[0]);
experiencias(entrada);