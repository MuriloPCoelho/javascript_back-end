const listaMerge = require('./array')
const ordena = require('./juntaListas')

function mergeSort(array, nivelAninhamento = 0) {
    
    console.log(`Nível de aninhamento: ${nivelAninhamento}`)
    console.log(array)

    if(array.length > 1) {
        const meio = Math.floor(array.length / 2)
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento++)
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento++)

        array = ordena(parte1, parte2)
    }

    return array
}

console.log(mergeSort(listaMerge))