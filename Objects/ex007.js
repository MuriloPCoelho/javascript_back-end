const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    telefone: ["5592394502", "5124505244"],
    dependentes: [{
        nome: "Sara Silva",
        idade: 5,
        cpf: "425562250-65",
        parentesco: "filha"
    }]
}

cliente.dependentes.push({
    nome: "Samira Maria",
    idade: 8,
    cpf: "42554320-65",
    parentesco: "filha"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.idade === 5)

console.log(filhaMaisNova[0].nome)