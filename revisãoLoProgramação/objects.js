// formal
const pessoa = new Object()
pessoa.nome = 'daniel'
pessoa.idade = 21

// console.log(pessoa)



const pessoa2= {
    nome: 'vitor',
    idade: '40'
}

// console.log(pessoa2)


const produto = {
    nome:'caneta',
    qtd: '5',
    comprar:function(n){
        console.log(this)
        if( n > this.qtd ){
            return 'quantidade nao disponivel'
        }
        this.qtd -= n
    }
}

produto.comprar(3)
console.log(produto)