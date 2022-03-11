function carregar() {
    var horario = document.querySelector("div#horario")
    var imagem = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    horario.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 6 && hora < 12) {
        imagem.src = 'imagens/dia.jpg'
        document.body.style.background = '#FFEA4D'
    }
    else if (hora >= 12 && hora < 18) {
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#a5510dd5'
    }
    else {
        imagem.src = 'imagens/noite.jpeg'
        document.body.style.background = 'rgb(70, 70, 70)'
    }
}