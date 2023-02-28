class Pessoa {
    constructor(nome, cpf, email, numero, dataNasc) {
        this.nome = nome
        this.cpf = cpf 
        this.email = email 
        this.numero = numero 
        this.dataNasc = dataNasc
    }

    descricao() {
        console.log(`Olá meu nome é ${this.nome}`)
    }
}

class Programador extends Pessoa {
    constructor(nome, cpf, email, numero, dataNasc, profissao) {
        super(nome, cpf, email, numero, dataNasc)
        this.profissao = profissao
    }

    descricaoProgramador() {
        console.log(`Olá meu nome é ${this.nome} e eu sou ${this.profissao}`)
    }
}

const julio = new Pessoa("Julio", "44433311122", "julio@email.com", "55999958357", "14/11/1972")

julio.descricao()

const marta = new Programador("Marta", "77766611122", "marta@email.com", "55999965459", "03/05/1966", "Programadora")

marta.descricaoProgramador()