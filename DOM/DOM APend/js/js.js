(function(){
    const nome = 'vitor'

    if(nome){
        const topbar = document.createElement('div')

        topbar.className = 'top-bar'

        topbar.innerHTML = `<p> olá, <b> ${nome}</b></p>`


        //Sintaxe - elementoPai.insertBefore(novoelemento, elementoreferencia)

        const elementoPai  = document.querySelector(".hero")

        elementoPai.insertBefore(topbar, elementoPai.firstElementChild)
    }
})()