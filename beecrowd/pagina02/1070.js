let n = parseInt(8);

for (let i = 0; i < 6; i++) {
    if (n % 2 !== 0) {          // se n for impar
        console.log(n);
        n = n + 2;
    } else {
        i--
        n++
    }
}