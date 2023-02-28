const alunos = ['João', 'Alberto', 'Joaquina', 'Pedro', 'Roberta', 'Chaislene']
const notas = [10, 4, 6, 5.3, 9, 8]

const reprovados = alunos.filter((_, indice) => notas[indice] < 7)

console.log(reprovados)

//se o valor do parâmetro for verdadeira,adiciona ao array do filter