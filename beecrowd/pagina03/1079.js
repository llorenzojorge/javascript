let lines = [3, '6.5 4.3 6.2', '5.1 4.2 8.1', '8.0 9.0 10.0'];
const n = parseInt(lines[0]);

function receberValores(n) {
    let array = [];
    let arrayDividida = [];

    // Preparando pesos para a Media Ponderada
    let peso1 = parseInt(2);
    let peso2 = parseInt(3);
    let peso3 = parseInt(5);
    let somaPesos = peso1 + peso2 + peso3;

    // Recebendo e armazenando os valores novos
    for (let i = 1; i <= n; i++) {
        array.push(lines[i]);
    }

    // Separando os valores, transformando em Number e realizando a Media P.
    for (let i = 0; i < n; i++) {
        arrayDividida.push(array[i].split(' ')); // array[0] = '6.5 4.3 6.2'

        let n1 = parseFloat(arrayDividida[i][0]);
        let n2 = parseFloat(arrayDividida[i][1]); 
        let n3 = parseFloat(arrayDividida[i][2]);

        let media = ((n1 * peso1) + (n2 * peso2) + (n3 * peso3)) / somaPesos;
        console.log(media.toFixed(1));
    }
}

const res = receberValores(n);