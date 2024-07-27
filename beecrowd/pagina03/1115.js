for (let i = 0; i < lines.length; i++) {
    let entrada = lines[i].split(' ');
    let x = parseInt(entrada[0]);
    let y = parseInt(entrada[1]);

    if (x > 0 && y > 0) {
        console.log('primeiro');
    } else if (x < 0 && y > 0) {
        console.log('segundo');
    } else if (x < 0 && y < 0) {
        console.log('terceiro');
    } else if (x > 0 && y < 0) {
        console.log('quarto');
    } else if (x === 0 || y === 0) {
        break;
    }
}