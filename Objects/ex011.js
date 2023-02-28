const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "12345678910",
        email: "andre@email.com",
        telefone: ["5592394502", "5124505244"],
        dependentes: [
          {
            nome: "Sara Silva",
            idade: 5,
            cpf: "425562250-65",
            parentesco: "filha"
          },
          {
            nome: 'Samira Maria',
            idade: 8,
            cpf: '417524320-65',
            parentesco: 'filha'
          }
        ]
    },
    {
        nome: "Juliana",
        idade: 41,
        cpf: "68323678915",
        email: "juliana@email.com",
        telefone: ["5498394517", "5199505221"],
        dependentes: [
          {
            nome: "Augusto Gabriel",
            idade: 3,
            cpf: "485562289-00",
            parentesco: "filho"
          },
          {
            nome: 'Jeisy Kimberly',
            idade: 11,
            cpf: '666543777-69',
            parentesco: 'filha'
          }
        ]
    }
]

let listaDependentes = []//[...clientes[0].dependentes, ...clientes[1].dependentes]

for(let cliente in clientes) {
    listaDependentes.push(...clientes[cliente].dependentes)
}

console.table(listaDependentes)