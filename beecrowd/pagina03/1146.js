let lines = [5, 10, 3, 0]
for (let i = 0; i < lines.length; i++) {
    let x = parseInt(lines[i]);
    if (x === 0) {
        break;
    } else {
        for (let j = 1; j <= x; j++) {
            if (j === x) {
                console.log(`${j}`)
            } else {
                process.stdout.write(`${j} `)
            }
        }
    }
}