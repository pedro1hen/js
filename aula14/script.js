function verificar() {
    var box = document.querySelector("input#idade")
    var idade = Number(box.value)

    var pessoa = document.querySelector("div#pessoa")
    var foto = document.createElement('img')
    foto.setAttribute('id', 'imagem')

    var sex = document.getElementsByName('sexo')
    var gen = ''

    if (idade == 0) {
        pessoa.innerHTML = 'Idade Inválida!'
    }
    else {       
        if (sex[0].checked) {
            gen = 'homem'
            if (idade > 0 && idade <= 13) {
                foto.setAttribute('src', `imagens/crianca-${gen}.jpeg`)
            } 
            else if (idade < 20) {
                foto.setAttribute('src', `imagens/ados-${gen}.jpeg`)
            }
            else if (idade < 50) {
                foto.setAttribute('src', `imagens/adulto-${gen}.jpeg`)
            }
            else {
                foto.setAttribute('src', `imagens/idoso-${gen}.jpeg`)
            }
        }
        else if (sex[1].checked) {
            gen = 'mulher'
            if (idade > 0 && idade <= 13) {
                foto.setAttribute('src', `imagens/crianca-${gen}.jpeg`)
            } 
            else if (idade < 20) {
                foto.setAttribute('src', `imagens/ados-${gen}.jpeg`)
            }
            else if (idade < 50) {
                foto.setAttribute('src', `imagens/adulto-${gen}.jpeg`)
            }
            else {
                foto.setAttribute('src', `imagens/idoso-${gen}.jpeg`)
            }
        }
        else {
            pessoa.innerHTML = "Informe o Sexo"
        }        
        pessoa.innerHTML = `Encontramos ${gen} com ${idade} anos<br>`
        pessoa.appendChild(foto);
    }
}