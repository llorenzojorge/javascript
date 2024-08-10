let lines = ['17 99'];
let entrada = lines[0].split(' ');
const x = parseInt(entrada[0]);
const y = parseInt(entrada[1]);

for (let i = 1; i <= y; i+=x) {
    let j = parseInt(i);
    process.stdout.write(`${j} `); j++
    process.stdout.write(`${j} `); j++
    console.log(`${j}`);
}