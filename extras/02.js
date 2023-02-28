const person = {
    firstName: "Jorge",
    lastName: "Silva",
    cpf: "66655544422",
    fullName: function() {
        return this.firstName + " " + this.lastName
    },
    mostrar: function() {
        return this
    }
}

console.table(person.mostrar())

console.log(person.fullName())
