const x = parseInt(lines[0]);
const y = parseInt(lines[1]);

function multiplos() {
    let total = 0;

    for (let i = x; i <= y; i++) {
        if (i % 13 !== 0) {
            total+=i;
        }
    }
    console.log(total);
}

multiplos();