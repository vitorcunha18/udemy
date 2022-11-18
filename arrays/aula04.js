let arr = [1, 2, 3, 4]

'acresentar valor no final da array'
c = arr.push(5)
console.log(arr, c)

'remove e retorna o valor na array'
c = arr.pop()
console.log(arr, c)

'shift pega o primeiro valor na array'
c = arr.shift()
console.log(arr, c)


'acresentar no inicio valor na array'
c = arr.unshift(5)
console.log(arr, c)


'recorte array'
c = arr.slice(1,5)

console.log(arr, c)

'remove e retorna o valor na array | modificar a array original '
c = arr.splice(5)

console.log(arr, c)