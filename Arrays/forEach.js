const notas = [10, 6.5, 8, 7, 7.5]

let totalNotas = 0

notas.forEach(nota => {
    totalNotas += nota
})

notas.forEach((n) => {console.log(n)})

let media = totalNotas/notas.length

console.log(media)

//a cada elemento do array retorna o valor do próprio elemento 