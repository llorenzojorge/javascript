var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = parseInt(lines[0]);

function data(totalDias) {
    let ano = Math.floor(totalDias / 365);
    let anoResto = Math.floor(totalDias % 365);
    let mes = Math.floor(anoResto / 30);
    let mesResto = Math.floor(anoResto % 30);

    return {
        ano: ano,
        mes: mes,
        dias: mesResto
    }
}

let resultado = data(entrada);
console.log(`${resultado.ano} ano(s)`);
console.log(`${resultado.mes} mes(es)`);  
console.log(`${resultado.dias} dia(s)`);