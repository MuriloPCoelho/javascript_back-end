function juntar() {
    return this.firstName + " " + this.lastName
}

const person2 = {
    firstName:"John",
    lastName: "Doe",
}

let x = juntar.call(person2)

console.log(x)