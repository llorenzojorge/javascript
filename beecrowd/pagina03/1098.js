let nI = parseInt(0);
let nJ = parseInt(1);

for (let i = 1; nI < 2.1; i++) {
    console.log(`I=${nI} J=${nJ}`);
    nJ++
    console.log(`I=${nI} J=${nJ}`);
    nJ++
    console.log(`I=${nI} J=${nJ}`);
    nJ-=1.8
    nI+=0.2
}
