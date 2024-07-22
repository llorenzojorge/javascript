function sequenciaIJ() {
    let saidaI = parseInt(1);
    let saidaJ = parseInt(7);

    while (saidaI !== 9) {
        console.log(`I=${saidaI} J=${saidaJ}`);
        saidaJ--
        console.log(`I=${saidaI} J=${saidaJ}`);
        saidaJ--
        console.log(`I=${saidaI} J=${saidaJ}`);
        saidaI = saidaI +2;
        saidaJ = 7
    }
}
sequenciaIJ();