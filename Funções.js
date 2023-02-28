// let x = "";
// console.log(x)
// x = "oi";

// 1) Declaração da função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) chamada da função

imprimeTexto('oi')
imprimeTexto("olá, mundo")

//

function soma() {
    const resultado = 2+2;
    return resultado;
}

console.log(soma())

// parâmetros 

function somar(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}

console.log(somar(8,5))

function multiplicar(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplicar(somar(4,5), somar(3,3)))

// função dentro de uma variável

const subtrair = function(numero1 = 0, numero2 = 0) {
    return numero1 - numero2
}

console.log(subtrair(5, 10))

// Arrow Functions

const dividir = (num1, num2) => num1 / num2;
console.log(dividir(4, 2))