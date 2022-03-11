function parimp (n){
    if (n%2 == 0){
        return 'Este número é PAR'
    }
    else {
        return 'Este número é IMPAR'
    }
}

var num = parimp(11)

console.log(num)

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))