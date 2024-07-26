let lines = ['5 2', '6 3', '5 0'];

for (let i = 0; i < lines.length; i++) {
    let entrada = lines[i].split(' ');
    let m = parseInt(entrada[0]);
    let n = parseInt(entrada[1]);

    if (m <= 0 || n <= 0) {
        break;
    } else if (m > n) { // 5 > 2 true
        for (let i = n; i <= n; i++) { // i = 2, 2 <= 5, 2++
            let total = i
            total++
            console.log(`${i} ${total}`)
        }
    } else if (n > m) {
        for (let i = m; i <= m; i++) {
            let total = i
            total++
            console.log(`${i} ${total}`)
        }
    }
}