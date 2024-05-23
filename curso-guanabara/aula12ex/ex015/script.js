function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var inputdoano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (inputdoano.value.length == 0 || Number(inputdoano.value) > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var tipodesex = document.getElementsByName('radsex')
        var idade = anoatual - Number(inputdoano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (tipodesex[0].checked) {
            gênero = 'um homem'
            if (idade >= 0 && idade < 13) {
                // CRIANÇA
                img.setAttribute('src', 'imagens/bebe-homem.png')
                gênero = 'uma criança'
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'imagens/jovem-homem.png')
                gênero = 'um jovem'
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'imagens/idoso-homem.png')
                gênero = 'um idoso'
            }
        } else if (tipodesex[1].checked) {
            gênero = 'uma mulher'
            if (idade >= 0 && idade < 13) {
                // CRIANÇA
                img.setAttribute('src', 'imagens/bebe-mulher.png')
                gênero = 'uma criança'
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'imagens/jovem-mulher.png')
                gênero = 'uma jovem'
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'imagens/idoso-mulher.png')
                gênero = 'uma idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}