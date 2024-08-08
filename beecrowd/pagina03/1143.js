let lines = [5];
const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
    process.stdout.write(`${i} `);
    process.stdout.write(`${Math.pow(i, 2)} `);
    console.log(`${Math.pow(i, 3)}`);
}