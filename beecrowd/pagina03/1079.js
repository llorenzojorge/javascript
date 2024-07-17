let lines = [3, '6.5 4.3 6.2', '5.1 4.2 8.1', '8.0 9.0 10.0'];
const n = parseInt(lines[0]);

function receberValores(n) {
    let array = [];

    // Preparando pesos para a Media Ponderada
    let peso1 = parseInt(2);
    let peso2 = parseInt(3);
    let peso3 = parseInt(5);
    const somaPesos = peso1 + peso2 + peso3;

    // Recebendo e armazenando os valores novos
    for (let i = 1; i <= n; i++) {
        array.push(lines[i]);
    }

    // Separando os valores, transformando em Number e realizando a Media P.
    for (let i = 0; i < n; i++) {
        let arrayDividida = [];
        arrayDividida.push(array[i].split(' '));

        let n1 = parseFloat(arrayDividida[0]);
        let n2 = parseFloat(arrayDividida[1]);
        let n3 = parseFloat(arrayDividida[2]);

        let media = ((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / somaPesos;
        console.log(media)
    }
}

const res = receberValores(n);