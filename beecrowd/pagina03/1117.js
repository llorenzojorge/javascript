let lines = [-3.5, 3.5, 11.0, 10.0];
let nota1; 
let nota2;
let media = (nota1 + nota2) / 2 

for (let i = 0; i < lines.length; i++) {
    let nota = lines[i];

    if (nota < 0 || nota > 10) {
        console.log('nota invalida');
    } else if (nota1 === undefined) {
        nota1 = lines[i];
        console.log(nota1)
    } else if (nota1 != undefined) {
        nota2 = lines[i]
        console.log(`media = ${media.toFixed(2)}`)
    }
}

// 10 + 3.5 /2 = media 6.75