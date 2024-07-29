// let lines = [-3.5, 3.5, 11.0, 10.0];
let lines = [-3.5, 10.1, 11.0, 0.1, 0.001,];
let nota1, nota2, media;

for (let i = 0; i < lines.length; i++) {
    let nota = lines[i];

    if (nota < 0 || nota > 10) {
        console.log('nota invalida');
    } else if (nota1 === undefined) {
        nota1 = lines[i];
    } else if (nota1 !== undefined) {
        nota2 = lines[i];
        media = (nota1 + nota2) / 2;
        console.log(`media = ${media.toFixed(2)}`);
        break;
    }
}

// 10 + 3.5 /2 = media 6.75