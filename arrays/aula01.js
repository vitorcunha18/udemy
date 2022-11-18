const ar = [1, 5, 10, 'ola', true] 

'testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna booleano.'
// let soN = ar.every(function(el){
//     return typeof el === 'number'
// })

'Some é o oposto do every'

let soNu = ar.some(function(el){
    return typeof el === 'number'
})

// console.log(soNu)


'Filtrar array, retorna o que foi encontrado em uma array'
arr = ar.filter(function(el){
    return typeof el === "number"
})


'Percorrer lista'
ar.forEach(function(el){
    console.log(el)
    }
)

'Percorrer array e retornar uma nova array'
let ar1 = ar.map(function(el){
    return el * el
})


console.log(ar1)