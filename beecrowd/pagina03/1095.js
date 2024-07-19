function sequenciaIJ() {
    let saidaI = parseInt(1);
    let saidaJ = parseInt(60);

    for (let i = 1; i <= 12; i++) {
        console.log(`I=${saidaI} J=${saidaJ}`);
        saidaI+=3;
        saidaJ-=5;
    }
}

console.log(sequenciaIJ());