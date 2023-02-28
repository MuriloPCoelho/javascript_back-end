const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678910",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})

