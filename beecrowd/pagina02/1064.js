// const array = [lines[0], lines[1], lines[2], lines[3], lines[4], lines[5]];
const n1 = parseFloat(lines[0]);
const n2 = parseFloat(lines[1]);
const n3 = parseFloat(lines[2]);
const n4 = parseFloat(lines[3]);
const n5 = parseFloat(lines[4]);
const n6 = parseFloat(lines[5]);
const array = [n1, n2, n3, n4, n5, n6]
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