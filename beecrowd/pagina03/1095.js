function sequenciaIJ() {
    let saidaI = parseInt(1);
    let saidaJ = parseInt(60);

    for (let i = 1; saidaJ !== 0; i++) {
        console.log(`I=${saidaI} J=${saidaJ}`);
        saidaI+=3;
        saidaJ-=5;
    }
}
const res = sequenciaIJ();
console.log(res);