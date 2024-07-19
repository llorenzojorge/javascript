function sequenciaIJ() {
    let saidaI = parseInt(1);
    let saidaJ = parseInt(60);

    while (saidaJ >= 0) {
        console.log(`I=${saidaI} J=${saidaJ}`);
        saidaI+=3;
        saidaJ-=5;
    }
}
sequenciaIJ();