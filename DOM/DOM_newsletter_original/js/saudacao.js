
//const texto = document.getElementById('txtEmail')
const respota = document.getElementById('newsletterFeedback')


function cademail(){
    respota.innerHTML = `${texto.value}`
}


const texto = document.getElementById('txtEmail')

function edit(){
    texto.disabled = false
    texto.focus()
}


function ripedit(){
    texto.disabled = true
}