const cliente = {
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
        cpf: '42554320-65',
        parentesco: 'filha'
      }
    ],
    saldo: 100,
    depositar: function(valor) {
      this.saldo += valor
    }
  }

  let relatorio = ""

  for(let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `${info} => ${cliente[info]}
        `
    }
  }

  console.log(relatorio)