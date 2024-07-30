// let lines = [-3.5, 3.5, 11.0, 10.0];
let nota1, nota2, media;

for (let i = 0; i < lines.length; i++) {
    let nota = parseFloat(lines[i]);

    if (nota < 0 || nota > 10) {
        console.log('nota invalida');
    } else if (nota1 === undefined) {
        nota1 = nota;
    } else if (nota1 !== undefined) {
        nota2 = nota;
        media = (nota1 + nota2) / 2;
        console.log(`media = ${media.toFixed(2)}`);
        break;
    }
}