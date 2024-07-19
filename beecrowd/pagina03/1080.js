let lines = [2, 113, 45, 34565, 923, 923, 33323413]

function maiorEPosicao() {
    let maior = lines[0];
    let posicao = 1

    for (let i = 1; i < lines.length; i++) {
        if (lines[i] > maior) {
            maior = lines[i];
            posicao = i + 1;
        }
    }

    return {
        maior: maior,
        posicao: posicao
    }
}

const res = maiorEPosicao();
console.log(res.maior);
console.log(res.posicao);