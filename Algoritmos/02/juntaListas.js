const {listaFolha, listaGalho} = require('./listas')

function juntaListas(lista1, lista2) {
    let listaFinal = []
    let posicaoAtualLista1 = 0
    let posicaoAtualLista2 = 0

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1]
        let produtoAtualLista2 = lista2[posicaoAtualLista2]

        if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal.push(produtoAtualLista1)
            posicaoAtualLista1++
        } else {
            listaFinal.push(produtoAtualLista2)
            posicaoAtualLista2++
        }
    }

    return listaFinal.concat(posicaoAtualLista1 < lista1.length 
        ?   lista1.slice(posicaoAtualLista1)
        :   lista2.slice(posicaoAtualLista2)
        )
}

module.exports = juntaListas