import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Maicon", "M@m.com", "2021-02-10")
//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin("Joao", "Jo@o.com", "2021-02-10")
//console.log(novoAdmin.exibirInfos())
novoAdmin.nome = "André"
console.log(novoAdmin.nome)

const novoDocente = new Docente("Guilherme", "g@g.com", "2021-02-02")
console.log(novoDocente.exibirInfos())