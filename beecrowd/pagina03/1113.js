for (let i = 0; i < lines.length; i++) {
    let entrada = lines[i].split(' ');
    let x = parseInt(entrada[0]);
    let y = parseInt(entrada[1]);

    if (x > y) {
        console.log('Decrescente');
    } else if (x < y) {
        console.log('Crescente');
    } else {
        break;
    }
}