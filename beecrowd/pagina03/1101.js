let lines = ['5 2', '6 3', '5 0'];

for (let i = 0; i < lines.length; i++) {
    let entrada = lines[i].split(' ');
    let m = parseInt(entrada[0]);
    let n = parseInt(entrada[1]);

    if (m <= 0 || n <= 0) {break;}

    else if (m > n) {
        for (let i = n; m >= n; i++) {
            let total = 0
            total+=i
            console.log(i + total)
        }
    } else if (n > m) {
        for (let i = m; n >= m; i++) {
            let total = 0
            total+=i
            console.log(i + total)
        }
    }
}