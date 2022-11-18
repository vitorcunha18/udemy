(function(){
    const nomeuser = null
    const elemento = document.querySelector('.top-bar p')

    if(nomeuser){
        //document.querySelector('.top-bar p').textContent += 'Olá'

        elemento.innerHTML += "<b>" + nomeuser + "</b>"
    }else{
        // elemento.parentElement.style.display = 'none'
        // elemento.remove()

        const elementoTOremove = elemento.parentElement
        elementoTOremove.parentElement.removeChild(elementoTOremove)
    }
})()