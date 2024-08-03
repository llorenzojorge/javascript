let lines = [7];
let entrada = parseInt(lines[0]);

function pum() {
    let n1 = parseInt(1);
    for (let i = 0; i < entrada; i++) {
        let y = 1;
        console.log(`${n1} ${n1 + 1} ${n1 + 2} PUM`);
        n1+=4;
    }
}

pum();