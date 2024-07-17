const n = parseInt(13);

function divisao(nmr) {
    for (let i = 1; i <= 10000; i++) {
        if (i % nmr === 2) {
            console.log(i);
        }
    }
}

const res = divisao(n);