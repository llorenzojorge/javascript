// let lines = [4, -5, 0, 3, -4];
function receberValores(qtd) {
    let array = [];

    // Recebendo e armazenando os valores
    for (let i = 1; i <= qtd; i++) {
        array.push(lines[i]);
    }

    // Trabalhando com os valores armazenados
    for (let i = 0; i < qtd; i++) {
        if (array[i] % 2 === 0 && array[i] > 0) {
            console.log('EVEN POSITIVE');
        } else if (array[i] % 2 === 0 && array[i] < 0) {
            console.log('EVEN NEGATIVE');
        } else if (array[i] % 2 !== 0 && array[i] > 0) {
            console.log('ODD POSITIVE');
        } else if (array[i] % 2 !== 0 && array[i] < 0) {
            console.log('ODD NEGATIVE');
        } else {
            console.log('NULL');
        }
    }
}

let res = receberValores(lines[0]);




















        // Analisando os valores e mostrando no log
