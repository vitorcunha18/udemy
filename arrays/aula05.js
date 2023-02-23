let arr = [1, 2 ,3 ,4 ,5]

// Mostra a arrays invertida | modifica a array original 
console.log(arr.reverse())


// Transforma uma array em outro objeto 

const soma = arr.reduce( function( acc, item){
    return acc + item
})

console.log(soma)