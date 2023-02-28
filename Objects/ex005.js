const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com",
    telefone: ["5592394502", "5124505244"]
}

cliente.telefone.forEach(numero => console.log(numero));