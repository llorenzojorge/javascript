let lines = [18, 12];
const x = parseInt(lines[0]);
const y = parseInt(lines[1]);
let maior; let menor;

if (x > y) {
    maior = x;
    menor = y;
} else {
    maior = y;
    menor = x;
}


for (let i = menor + 1; i < maior; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        console.log(i);
    }
}