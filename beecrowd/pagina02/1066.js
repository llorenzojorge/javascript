const n1 = parseInt(lines[0]) //parseInt(-5);
const n2 = parseInt(lines[1]) //parseInt(0);
const n3 = parseInt(lines[2]) //parseInt(-3);
const n4 = parseInt(lines[3]) //parseInt(-4);
const n5 = parseInt(lines[4]) //parseInt(12);
const array = [n1, n2, n3, n4, n5]

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 5; i++) {
    if (array[i] % 2 === 0) {
        pares++;
    }
    if (array[i] % 2 !== 0) {
        impares++;
    }
    if (array[i] > 0) {
        positivos++;
    }
    if (array[i] < 0) {
        negativos++;
    }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);