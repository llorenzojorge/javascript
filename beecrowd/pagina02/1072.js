let n = parseInt(lines[0]);
let n1 = parseInt(lines[1]);
let n2 = parseInt(lines[2]);
let n3 = parseInt(lines[3]);
let n4 = parseInt(lines[4]);

let inside = 0;
let outside = 0;

function dentroFora(numero) {
    if (numero >= 10 && numero <= 20) {
        inside++
    } else {
        outside++
    }    
}

dentroFora(n1);
dentroFora(n2);
dentroFora(n3);
dentroFora(n4);

console.log(`${inside} in`);
console.log(`${outside} in`);