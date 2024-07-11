// const array = [lines[0], lines[1], lines[2], lines[3], lines[4], lines[5]];
const array = [7, -5, 6, -3.4, 4.6, 12]
let nPositivos = [];
let qtdPositivos = parseInt(0);
let media = parseFloat(0);


for (let i = 0; i < 6; i++) {
    if (array[i] > 0) {
        nPositivos.push(array[i]);
        qtdPositivos++;
    }
}

for (let i = 0; i < nPositivos.length; i++) {
    media += nPositivos[i];
}

let mediaCalculada = qtdPositivos > 0 ? media / qtdPositivos : 0;

console.log(`${qtdPositivos} valores positivos`);
console.log(mediaCalculada.toFixed(1));