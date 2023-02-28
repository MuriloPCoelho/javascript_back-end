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
  
  function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
      
    if(propsClientes.includes("dependentes")) {
      console.log(`Oferta de seguro de vida para ${obj.nome}`)  
    }
  }

  console.log(Object.entries(cliente))

  oferecerSeguro(cliente)