const entrada = '9.0 4.0 8.5 9.0';
const entradaPartes = entrada.split(' ');

const n1 = parseFloat(entradaPartes[0]);
const n2 = parseFloat(entradaPartes[1]);
const n3 = parseFloat(entradaPartes[2]);
const n4 = parseFloat(entradaPartes[3]);

const peso1 = parseInt(2);
const peso2 = parseInt(3);
const peso3 = parseInt(4);
const peso4 = parseInt(1);
const totalPesos = peso1 + peso2 + peso3 + peso4;

const media = ((n1*peso1) + (n2*peso2) + (n3*peso3) + (n4*peso4)) / totalPesos;

console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7.0) {
    console.log('Aluno aprovado.');
} else if (media < 5.0) {
    console.log('Aluno reprovado.');
} else {
    console.log('Aluno em exame.');
    let notaExame = parseFloat(6.4);
    let mediaFinal = (notaExame + media) / 2;
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    if (mediaFinal >= 5.0) {
        console.log('Aluno aprovado.');
    } else {
        console.log('Aluno reprovado.');
    }
    console.log(`Media final: ${mediaFinal.toFixed(1)}`)
}
