// let array = [lines[0], lines[1], lines[2], lines[3], lines[4], lines[5]];
let array = [7, -5, 6, -3.4, 4.6, 12];
let contadorPositivos = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        contadorPositivos++
    }

}
console.log(`${contadorPositivos} valores positivos`)