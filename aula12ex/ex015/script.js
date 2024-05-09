function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var inputano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (inputano.length == 0 || inputano > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Está tudo certo!')
    }
}