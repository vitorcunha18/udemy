let arr = [4, 5, 10, 20, 35, 4, 5]

'Mostra o indice pro primeiro item encotrado | se não achar retorna -1'
console.log(arr.indexOf(5))

'Mostra o indice pro ultimo item encotrado | se não achar retorna -1'
console.log(arr.lastIndexOf(5))

'Retorna true ou false se o item existi na array'
console.log(arr.includes(5))


'Retorna o primeiro valor que seja verdadeira da callback | se não achar retorna undefined'
console.log( arr.find(function(elemento){
    return elemento > 5
}))


'Retorna o primeiro valor que seja verdadeira da callback | se não achar retorna undefined'
console.log( arr.findIndex(function(elemento){
    return elemento == 10
}))