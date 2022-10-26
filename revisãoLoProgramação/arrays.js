const arr = new Array()

const arr2 = new Array('daniel','12',[1,2,3])

arr[1] = 'vitor'
arr[0] = 1
arr.push(2)


// console.log(arr)
// console.log(arr2[2])


// for (let i=0; i<arr2.length;i++){
//     console.log(`${i}: nome é ${arr2[i]}`)
// }




const nome = ['',"",""]
const pessoa = {nome:'vitor', idade:'daniel'}


const pessoas = [
    {nome:'vitor', idade:'2'},
    {nome:'daniel', idade:'3'},
    {nome:'carol', idade:'2'}
]

for(let i=0; i<pessoas.length; i++){
    console.log(pessoas[i].nome)
}