const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]

const exibirNota = (nomeAluno) => {
    if (alunos.indexOf(nomeAluno) >= 0) {
        return `O(A) aluno(a) ${nomeAluno} ficou com média ${medias[alunos.indexOf(nomeAluno)]}`
    } else {
        return "Aluno não encontrado"
    }
}

console.log(exibirNota("Julian"))