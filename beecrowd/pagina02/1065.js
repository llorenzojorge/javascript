// const n1 = parseInt(lines[0]);
// const n2 = parseInt(lines[1]);
// const n3 = parseInt(lines[2]);
// const n4 = parseInt(lines[3]);
// const n5 = parseInt(lines[4]);
const n1 = parseInt(7);
const n2 = parseInt(-5);
const n3 = parseInt(6);
const n4 = parseInt(-4);
const n5 = parseInt(12);
const array = [n1, n3, n3, n4, n5]
let pares = 0;

for (let i = 0; i < 4 ; i++) {
    if (array[i] % 2 === 0) {
        pares++
        console.log(array[i])
    }
}

console.log(`${pares} valores pares`)