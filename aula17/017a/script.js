function tabuada() {
    var num = document.querySelector("input#num")
    var numero = Number(num.value)

    var lista = document.querySelector("select#lista")
    lista.innerHTML = ''
    
    if (num.value.length == 0){
        var item = document.createElement("option")
            item.innerHTML = 'Tabuada Inválida'
            lista.appendChild(item)
    }
    else {
        for(var i = 0; i <= 10; i++){
            var item = document.createElement("option")
            item.innerHTML = `${numero} x ${i} = ` + (numero * i)
            lista.appendChild(item)
        }
    }
}