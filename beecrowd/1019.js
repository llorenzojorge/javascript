var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function converterRelogio(segundosTotais) {
    const hr = Math.floor(segundosTotais / 3600);
    const min = Math.floor(segundosTotais % 3600 / 60)
    const seg = segundosTotais % 60;
    
    return {
        hr: hr,
        min: min,
        seg: seg
     }
}

const N = parseInt(lines[0]);
const resultado = converterRelogio(N);
console.log(`${resultado.hr}:${resultado.min}:${resultado.seg}`);