let lines = [3, '6.5 4.3 6.2', '5.1 4.2 8.1', '8.0 9.0 10.0'];
const n = parseInt(lines[0]);

function receberValores(n) {
    let array = [];

    // Preparando pesos para a Media Ponderada
    const peso1 = parseInt(2);
    const peso2 = parseInt(3);
    const peso3 = parseInt(5);
    const somaPesos = peso1 + peso2 + peso3;
    let media = ((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / somaPesos

    // Recebendo e armazenando os valores novos
    for (let i = 1; i <= n; i++) {
        array.push(lines[i]);
    }

    // Separando os valores e transformando em Number
    for (let i = 0; i < n; i++) {
        
    }
}

const res = receberValores(n);