// let n = 0

// while (n < 10) {
//     ++n;
//     console.log(n)
// }



// for (let j=0; j<10; j++){
//     console.log(j)
// }


// const a = ['a','b','c','d','e']
// a.forEach(n => {
//     console.log(n)
// });

// Criar array com numeros randomicos 

function generetionRandomNuber(max){
   return parseInt(Math.random() * max)
}

let arr = []

while(arr.length <=20 ){
    let randnumber = generetionRandomNuber(30)
    console.log(randnumber)

    if (arr.indexOf(randnumber) == -1){
        arr.push(randnumber)
    }
}

console.log(arr)