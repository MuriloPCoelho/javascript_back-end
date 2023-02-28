const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    telefone: ["5592394502", "5124505244"]
}

cliente.dependentes = {
    nome: "Sara",
    idade: 5,
    cpf: "425562250-65",
    parentesco: "filha"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)

