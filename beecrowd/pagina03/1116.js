//let lines = [3, '3 -2', '-8 0', '0 8']
const entrada = lines[0];

for (let i = 1; i <= entrada; i++) {
    let entrada = lines[i].split(' ');
    let x = parseInt(entrada[0]);
    let y = parseInt(entrada[1]);

    let divisao = x / y;
    if (!isFinite(divisao)) {
        console.log('divisao impossivel');
    } else {
        console.log(divisao.toFixed(1));
    }
}