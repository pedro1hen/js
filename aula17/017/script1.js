function contar() {
    var ini = document.querySelector("input#inicio")
    var inicio = Number(ini.value)

    var f = document.querySelector("input#fim")
    var fim = Number(f.value)

    var pas = document.querySelector("input#passo")
    var passo = Number(pas.value)

    var resultado = document.querySelector("div#resultado")
    resultado.innerHTML = ''

    if (ini.value.length == 0 || f.value.length == 0 || pas.value.length == 0 || passo == 0){
        resultado.innerHTML = "Contagem Inválida"
    }
    else {
        if (inicio < fim){
            for(var i = inicio; i <= fim; i += passo) {
                if(i == fim) {
                    resultado.innerHTML += `${i}.`
                }
                else {
                    resultado.innerHTML += `${i}, `
                }            
            }
        }
        else {
            for(var i = inicio; i >= fim; i -= passo) {
                if(i == fim) {
                    resultado.innerHTML += `${i}.`
                }
                else {
                    resultado.innerHTML += `${i}, `
                }            
            }
        }
        
    }
}