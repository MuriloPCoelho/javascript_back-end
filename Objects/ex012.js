function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo 
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const andre = new Cliente("André", "12345632332", "andre@email.com", 100)

const luisa = new Cliente("Luisa", "86155544463", "luisa@email.com", 20)

console.table(andre)
console.table(luisa)

