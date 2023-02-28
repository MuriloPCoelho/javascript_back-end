const cursos = require('./listaCursos')
const menorValor = require('./menorValor')

for(let atual = 0; atual < cursos.length - 1; atual++) {
    let menor = menorValor(cursos, atual)
    let cursoAtual = cursos[atual]
    console.log(cursos[atual])
    let cursoMenorPreco = cursos[menor]
    console.log(cursos[menor])
    cursos[atual] = cursoMenorPreco
    cursos[menor] = cursoAtual
}

console.table(cursos)