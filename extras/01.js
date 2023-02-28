function capturar(n){
    listaNumeros.push(n)
}

const listaNumeros = []

capturar(4)
capturar(6)
capturar(15)

function somar() {
    let total = 0;
    listaNumeros.forEach(numero => {
        total += numero
    })
    return total
}

function subtrair() {
    let total = 0;
    listaNumeros.forEach(numero => {
        total -= numero
    })
    return total
}

function multiplicar() {
    let total = 1;
    listaNumeros.forEach(numero => {
        total *= numero
    })
    return total
}

function dividir() {
    let total = 1;
    listaNumeros.forEach(numero => {
        total /= numero
    })
    return total
}

console.log(somar())
console.log(subtrair())
console.log(multiplicar())
console.log(dividir())

console.log(listaNumeros)

