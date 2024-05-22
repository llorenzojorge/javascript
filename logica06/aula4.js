// Dado uma coleção de dados "idades", imprima  na tela a soma desses valores

var idades = [15, 46, 75, 34, 23]
var total = 0

for (var contador = 0; contador < idades.length; contador++) {
    total += idades[contador]
    console.log(total)
}