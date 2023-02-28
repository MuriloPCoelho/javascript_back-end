const setor = document.querySelector('section.clientes')
let campoNome = document.querySelector('input#nome')
let campoCPF = document.querySelector('input#cpf')
let campoEmail = document.querySelector('input#email')

function adicionar() {
    let nome = campoNome.value
    let cpf = campoCPF.value
    let email = campoEmail.value
    setor.innerHTML += `<div class="cliente"><h2>${nome}</h2><p>${cpf}</p><p>${email}</p></div>`
}
