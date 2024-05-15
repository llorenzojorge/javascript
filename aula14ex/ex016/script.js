function contar(){
    let inicio = document.getElementById('idinicio')
    let fim = document.getElementById('idfim')
    let passo = document.getElementById('idpasso')
    let resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Está faltando Dados')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} `
        }
    }
} 