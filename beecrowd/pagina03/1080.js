let lines = [2, 113, 45, 34565, 923, 923, 33323413]

let maior = lines[0];
let posicao = 1;

for (let i = 1; i < lines.length; i++) {
    if (lines[i] > maior) {
        maior = lines[i];
        posicao = i + 1;
    }
}

console.log(maior);
console.log(posicao);
