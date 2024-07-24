let nI = 1;
let nJ = 7;

for (let i = 1; nI < 10; i++) {
    console.log(`I=${nI} J=${nJ}`); // I=1 J=7 
    nJ--;
    console.log(`I=${nI} J=${nJ}`); // I=1 J=6
    nJ--;
    console.log(`I=${nI} J=${nJ}`); // I=1 J=5
    nI+=2;
    nJ+=4;
}