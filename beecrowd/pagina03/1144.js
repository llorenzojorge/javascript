let lines = [5];
const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    let j = Math.pow(i, 2);
    
    process.stdout.write(`${i} `);
    process.stdout.write(`${j} `);
    j = Math.pow(i, 3);
    console.log(`${j}`);

    j = Math.pow(i, 2) + 1;
    process.stdout.write(`${i} `);
    process.stdout.write(`${j} `);
    j = Math.pow(i, 3) + 1;
    console.log(`${j}`);
}