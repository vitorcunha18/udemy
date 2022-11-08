
(function(){
    function media(){
        let total = 0;
        let qtd = arguments.length;

        for (let i = 0; i < qtd; i++) {
            if (typeof arguments[i] !== 'number'){
                throw Error('only number');
            }

            total += arguments[i]

        }

        return (total / qtd) || 0
    }

    let m = media()

    console.log(m)
})()