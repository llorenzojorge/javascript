let lines = [10, '10 C', '6 R', '15 S', '5 C', '14 R', '9 C', '6 R', '8 S', '5 C', '14 R']
let entrada = parseInt(lines[0]);
let cobaiaQtd; let cobaiaTipo;

for(let i = 1; i <= entrada; i++) {
    // separando a QTD e TIPO de cobaias
    let separacao = lines[i].split(' ');
    cobaiaQtd = parseInt(separacao[0]);
    cobaiaTipo = separacao[1];
    console.log(cobaiaQtd + cobaiaTipo)
}