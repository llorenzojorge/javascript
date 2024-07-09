const entrada = '2 16';
const entradaPartes = entrada.split(' ');
const A = parseInt(entradaPartes[0]);
const B = parseInt(entradaPartes[1]);

function calcDuracao(horaInicial, horaFinal) {
    let duracao;

    if (horaFinal <= horaInicial) {
        duracao = (24 - horaInicial) + horaFinal;
    } else {
        duracao = horaFinal - horaInicial
    }

    return duracao;
}
let res = calcDuracao(A, B);
console.log(`O JOGO DUROU ${res} HORA(S)`)