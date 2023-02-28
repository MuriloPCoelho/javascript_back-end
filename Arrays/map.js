const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(n => n == 10 ?
    n : ++n)

console.log(notasAtualizadas)

//retorna todo o array e permite fazer alteração para cada elemento do array original 