function sum(n1, n2){
    if (typeof n1 !== "number" || typeof n2 !== "number" ){
        throw Error('apenas numeros')
    }
    return n1 + n2
}




let soma  = ''
try {
    soma = sum(3,"a")
}catch (e) {
    console.log('colo nuemro')
} finally{
    
}

console.log(soma)