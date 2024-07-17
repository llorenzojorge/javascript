const n = parseInt(140);

function tabuada(nmr) {
    for (let i = 1; i <= 10; i++) {
        let multiplicacao = i * nmr
        console.log(`${i} x ${nmr} = ${multiplicacao}`);
    }
}

const res = tabuada(n);