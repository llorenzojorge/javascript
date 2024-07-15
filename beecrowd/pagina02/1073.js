const n = parseInt(lines[0]);

function tabuada(nmr) {
    if (nmr % 2 === 0) {
        for (let i = 2; i <= nmr; i+= 2) {
            let res = Math.pow(i, 2);
            console.log(`${i}^2 = ${res}`);
        }
    } else {
        nmr-= 1
        for (let i = 2; i <= nmr; i+= 2) {
            let res = Math.pow(i, 2);
            console.log(`${i}^2 = ${res}`);
        }
    }
}

const final = tabuada(n);