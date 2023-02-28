const dados = require("./cliente.json") // busca um objeto em outro arquivo que seja .json

console.log(dados)
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados) // transforma um objeto JSON em uma string

console.log(clienteEmString)
console.log(typeof clienteEmString)

const objetoCliente = JSON.parse(clienteEmString) // transforma uma string em objeto JSON

console.log(objetoCliente)