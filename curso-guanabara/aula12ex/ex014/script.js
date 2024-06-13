function carregar() {
    // Importando dados do HTML.
    let msg = document.getElementById('msg');
    let divImg = document.getElementById('foto');
    let img = document.getElementById('imagem');

    // Importando as horas atuais.
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    
    // Configurando a msg adequada pra cada horario.
    msg.innerHTML = `Agora são ${hora}:${minutos}m`
    // Bom dia:
    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = '#19100B';
    } else {
    // Boa tarde:
        if (hora >= 12 && hora < 18) {
            img.src = 'tarde.png';
            document.body.style.background = '#B9846F';
        } else {
    // Bom dia:
            img.src = 'noite.png';
            document.body.style.background = 'gray';
        }
    }
}



// function carregar() {
//     var msg = document.getElementById('msg')
//     var img = document.getElementById('imagem')
//     var data = new Date()
//     var hora = data.getHours()
//     msg.innerHTML = `Agora são ${hora} horas.`
//     if (hora >= 0 && hora < 12) {
//         // BOM DIA!
//         img.src = 'manha.png'
//         document.body.style.background = '#19100B'
//     } else if (hora >= 12 && hora < 18) {
//         // BOA TARDE!
//         img.src = 'tarde.png'
//         document.body.style.background = '#B9846F'
//     } else {
//         // BOA NOITE!
//         img.src = 'noite.png'
//         document.body.style.background = 'blue'
//     }
// }