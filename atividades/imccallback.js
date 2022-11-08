function imc(){
    let peso = arguments[0]
    let altura = arguments[1]
    const grau1 = arguments[2]

    const imc =  peso / altura**2

    if (typeof peso !== 'number' || typeof altura !== 'number'){
        throw Error('Você não digitou numeros')
    }

    if (typeof grau1 === 'function'){
        return grau1(imc)
    }
     
    return imc
}

function grau(imc){
    if(imc <= 16.69) {
        return 'Você estar muito a baixo do peso';
    } 
    else if ( imc <= 18.4){
        return 'Você estar a baixo do peso';
    }
    else if (imc <= 24.9){
        return 'Você estar com o peso normal';
    }
    else if ( imc <= 29.9){
        return 'Você estar com o peso normal';
    }
    else if ( imc <= 34.9){
        return 'Você estar com obesidade grau 1';
    }
    else if ( imc <= 40){
        return 'Você estar com obesidade grau 2';
    }
    else{
        return 'Você estar com obesidade grau 3';
    }
}

let valorimc = imc(67, 1.75)
let valorimcall = imc(67, 1.75, grau)

console.log(valorimc)

console.log(valorimcall)