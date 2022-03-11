var vetor = []

function adicionar(){
    var resultado = document.querySelector('label#resultado')
    resultado.innerHTML = ''
    var num = document.querySelector('input#txtnum')   
    var elemento = Number(num.value)

    var lista = document.querySelector('select#txtarray')

    if (elemento.length == 0) {        
        alert('Digite um valor não nulo!')
    }
    else {
        if (elemento < 1 || elemento > 100) {
            alert('Valor não pode ser inserido na lista')
            num.value = ''
        }
        else {
            if(vetor.indexOf(elemento) != -1)
            {
                alert('Valor já adicionado na lista!')
                num.value = ''
            }
            else {
                var item = document.createElement('option')
                item.innerHTML = `${elemento} foi adicionado à lista`
                lista.appendChild(item)
                num.value = ''
                vetor.push(elemento)  
            }
        }
    }
}

function finalizar() {
    if (vetor == 0){
        alert('Antes de finalizar, adicione um valor!')
    }
    else{
        var resultado = document.querySelector('label#resultado')
        var qt = vetor.length
        vetor.sort()
        var maior = vetor[0]
        var menor = vetor[0]
        var soma = 0

        for (let pos in vetor){
            soma += vetor[pos]
            if(vetor[pos] > maior)
                maior = vetor[pos]
            if (vetor[pos] > menor)
                menor = vetor[pos]
        }

        resultado.innerHTML = `A lista contém ${qt} elementos.<br>
        O maior valor informado foi ${maior}<br>
        O menor valor informado foi ${menor}<br>
        Somando todos os valores temos ${soma}<br>
        A média dos valores é ${soma/qt}`
    }   
}