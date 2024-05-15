function contar(){
    let inicio = document.getElementById('idinicio')
    let fim = document.getElementById('idfim')
    let passo = document.getElementById('idpasso')
    let resultado = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Faltam Dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
            // Em CASO DE BUGS
            window.alert('Passo nválido')
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) { 
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c-=p) { 
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
    }
} 