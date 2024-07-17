const n1 = parseFloat(6.5);
const n2 = parseFloat(4.3);
const n3 = parseFloat(6.2);

const peso1 = parseInt(2);
const peso2 = parseInt(3);
const peso3 = parseInt(5);
const somaPesos = peso1 + peso2 + peso3;

let media = ((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / somaPesos;

console.log(media.toFixed(1));
