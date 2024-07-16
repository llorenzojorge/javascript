var lines = [4, 14, 123, 10, -25];
let n = parseInt(lines[0]);

function receberValores(nmr) {
    let arrayX = [];
    let inside = 0;
    let outside = 0;

    for (let i = 1; i <= nmr; i++) {
        arrayX.push(lines[i]);
    }
    for (let i = 0; i < nmr; i++) {
        if (arrayX[i] >= 10 && arrayX[i] <= 20) {
            inside++
        } else {
            outside++
        }
    }

    return {
        in: inside,
        out: outside
    }
}

let res = receberValores(n);
console.log(`${res.in} in`);
console.log(`${res.out} out`);