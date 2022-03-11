let num = [5, 2, 3, 6, 9]
/*
console.log(`Array = ${num}`)

// Inserir elemento na última posição do Array
num.push(8)
console.log(`Array = ${num}`)

// ORDENAR EM ORDEM CRESCENTE
num.sort()
console.log(`Array = ${num}`)

// Exibir todas as posições e valores do array
for (var pos = 0; pos < num.length; pos++){
    console.log(`Array posição ${pos} = ${num[pos]}`)
}


// Para cada pos dentro de num
for (let pos in num) {
    console.log(`Array posição ${pos} = ${num[pos]}`)
}
*/
num.push(8)
num.sort()
var pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
}
else {   
    console.log(`O valor está na posição ${pos}`)
}
