let lines = [200, 100]
const x = parseInt(lines[0]);
const y = parseInt(lines[1]);

function multiplos() {
    let total = parseInt(0);
    let maior; let menor;

    if (x > y) {
        maior = x;
        menor = y;
    } else {
        maior = y;
        menor = x;
    }

    for (let i = menor; i <= maior; i++) {
        if (i % 13 !== 0) {
            total+=i;
        }
    }
    console.log(total);
}

multiplos();