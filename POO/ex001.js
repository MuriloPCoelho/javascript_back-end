const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Pablo",
    email: "PL@j.com",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, user) // serve para fazer o primeiro parâmetro (objeto) herdar os métodos do segundo parâmetro (objeto)
admin.criarCurso()
admin.exibirInfos()