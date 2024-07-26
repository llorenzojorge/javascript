let lines = ['5 2', '6 3', '5 0'];

for (let i = 0; i < lines.length; i++) {
    let entrada = lines[i].split(' ');
    let m = parseInt(entrada[0]);
    let n = parseInt(entrada[1]);

    if (m <= 0 || n <= 0) {
        break;
    } else if (m > n) { 
        let total = 0;
        for (let j = n; j <= n; j++) {
            total += j;
            process.stdout.write(`${j} `)
        }
        console.log(`Sum=${total}`);
    } else if (n > m) {
        let total = 0;
        for (let j = m; j <= m; j++) {
            total += j;
            process.stdout.write(`${j} `)
        }
        console.log(`Sum=${total}`)
    }
}
