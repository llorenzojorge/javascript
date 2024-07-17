function somaImparesEntre(x, y) {
    // Determina o menor e o maior valor
    let menor = Math.min(x, y);
    let maior = Math.max(x, y);

    // Inicializa a soma dos ímpares
    let soma = 0;

    // Itera pelos números entre menor e maior (excluindo-os)
    for (let i = menor + 1; i < maior; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }

    return soma;
}

// Exemplo de uso
let x = lines[0];
let y = lines[1];
let resultado = somaImparesEntre(x, y);
console.log(resultado);